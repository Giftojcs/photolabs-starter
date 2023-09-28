const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db")

const photos = require("./routes/photos");
const topics = require("./routes/topics");

app.get("/api/photos/search", (req, res) => {
  const { username, location, country } = req.query;

  const searchResults = searchPhotos(username, location, country);

  res.json(searchResults);
});

app.post('/api/photos/:photoId/like', (req, res) => {
  const photoId = req.params.photoId;
  // Handle liking the photo with the given photoId
  // Update the liked photos count or perform any necessary actions
  res.status(200).send('Photo liked successfully');
});

app.use(cors());

app.post('/api/photos', (req, res) => {
  const { title, imageUrl, description, username, location, country } = req.body;

  // Assuming you have a database setup (e.g., using db.query) to insert the photo into the database
  const query = 'INSERT INTO photos (title, imageUrl, description, username, location, country) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [title, imageUrl, description, username, location, country];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error creating photo:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ message: 'Photo created successfully', photoId: result.insertId });
    }
  });
});

app.get("/api/liked-photos", (req, res) => {
  const likedPhotos = [
    { id: 1, title: 'Liked Photo 1', imageUrl: 'http://example.com/photo1.jpg', description: 'Description 1' },
    { id: 2, title: 'Liked Photo 2', imageUrl: 'http://example.com/photo2.jpg', description: 'Description 2' },
    // Add more liked photos
  ];
  res.json(likedPhotos);
});

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(
  ENV,
) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use("/api", photos(db));
  app.use("/api", topics(db));

  if (ENV === "development" || ENV === "test") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/${ENV}.sql`))
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch(error => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }

  app.close = function() {
    return db.end();
  };

  return app;
};
