const express = require('express');
const router = express.Router();
const photoRouter = require('express').Router();

photoRouter.post('/:id/like', (req, res) => {
  const photoId = req.params.id;
  // Implement logic to handle liking the photo with the given ID
  // For example, update the photo record in the database to mark it as liked by the user
  res.status(200).json({ message: `Liked photo with ID ${photoId}` });
});

module.exports = photoRouter;

module.exports = db => {
  router.get("/photos", (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 8001;
    const serverUrl = `${protocol}://${host}:${port}`;

    db.query(`
      SELECT 
      json_agg(
          json_build_object(
            'id', photo.id,
            'urls', json_build_object(
              'full', concat('${serverUrl}/images/', photo.full_url),
              'regular', concat('${serverUrl}/images/', photo.regular_url)
            ),
            'user', json_build_object(
              'username', user_account.username,
              'name', user_account.fullname,
              'profile', concat('${serverUrl}/images/', user_account.profile_url)
            ),
            'location', json_build_object(
              'city', photo.city,
              'country', photo.country
            ),
            'similar_photos', (
              SELECT 
                json_agg(
                  json_build_object(
                    'id', similar_photo.id,
                    'urls', json_build_object(
                      'full', concat('${serverUrl}/images/', similar_photo.full_url),
                      'regular', concat('${serverUrl}/images/', similar_photo.regular_url)
                    ),
                    'user', json_build_object(
                      'username', similar_user_account.username,
                      'name', similar_user_account.fullname,
                      'profile', concat('${serverUrl}/images/', similar_user_account.profile_url)
                    ),
                    'location', json_build_object(
                      'city', similar_photo.city,
                      'country', similar_photo.country
                    )
                  )
                )
              FROM photo AS similar_photo
              JOIN user_account AS similar_user_account ON similar_user_account.id = similar_photo.user_id
              WHERE similar_photo.id <> photo.id
              AND similar_photo.topic_id = photo.topic_id
              LIMIT 4
            )
          )
        ) as photo_data
      FROM photo
      JOIN user_account ON user_account.id = photo.user_id;
    `).then(({ rows }) => {
      response.json(rows[0].photo_data);
    });
  });

  // Define the route for fetching liked photos
  router.get('/liked-photos', async (req, res) => {
    try {
      // Implement logic to fetch liked photos from the database
      const likedPhotos = await fetchLikedPhotosFromDatabase();

      // Send the fetched liked photos as the response
      res.json({ likedPhotos });
    } catch (error) {
      console.error('Error fetching liked photos:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  return router;
};
