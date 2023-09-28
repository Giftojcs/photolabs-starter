import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LikedPhotos = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  useEffect(() => {
    // Fetch liked photos data from the server
    axios.get('http://localhost:8080/api/liked-photos')
    .then(response => {
      console.log('Liked photos:', response.data);
    })
    .catch(error => {
      console.error('Error fetching liked photos:', error);
    });
  }, []);

  return (
    <div>
      <h2>Liked Photos</h2>
      <ul>
        {likedPhotos.map(photo => (
          <li key={photo.id}>
            <img src={photo.imageUrl} alt={photo.title} />
            <p>{photo.title}</p>
            <p>{photo.description}</p>
            {/* Add other details you want to display */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedPhotos;
