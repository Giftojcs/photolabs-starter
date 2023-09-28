import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/PhotoList.scss";

const PhotoList = ({
  favorites,
  toggleFavorite,
  handleToggleModal,
  excludePhotoId,
  searchTerm,
}) => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("/api/photos");
      return response.data;
    } catch (error) {
      console.error("Error fetching photos:", error);
      return [];
    }
  };

  const handleToggleFavorite = async (photoId) => {
    try {
      await axios.post(`/api/photos/${photoId}/like`); 
      toggleFavorite && toggleFavorite(photoId);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  useEffect(() => {
    fetchPhotos()
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  const filteredPhotos = photos.filter((photo) => {
    const userUsername = (photo.user && photo.user.username) || "";
    const city = (photo.location && photo.location.city) || "";
    const country = (photo.location && photo.location.country) || "";

    const searchTermLowerCase = searchTerm ? searchTerm.toLowerCase() : "";

    const searchFields = [userUsername, city, country];
    return searchFields.some((field) =>
      field.toLowerCase().includes(searchTermLowerCase)
    );
  });

  const handleLikeClick = (e, photoId) => {
    e.stopPropagation(); 
    handleToggleFavorite(photoId);
  };

  return (
    <div className="photo-list">
      {filteredPhotos.map((photo) => (
        <div key={photo.id} className="photo-item" onClick={() => handleToggleModal(photo.id)}>
          <div className="photo-container">
            <img src={photo.urls.regular} alt={`Photo ${photo.id}`} />
            <p className="info-value">{photo.location.city}, {photo.location.country}</p>
            <div className="user-info-container">
              <div className="user-profile">
                <img src={photo.user.profile} alt={`${photo.user.username}'s profile`} />
              </div>
              <div className="user-details">
                <p className="username">{photo.user.username}</p>
                <p className="name">{photo.user.name}</p>
              </div>
            </div>
            <button
              className={`like-button ${favorites && Array.isArray(favorites) && favorites.includes(photo.id) ? 'liked' : ''}`}
              onClick={(e) => handleLikeClick(e, photo.id)}
            >
              <span className="heart-icon" role="img" aria-label="Heart">
                ❤️
              </span>
              <span className="like-count">{Array.isArray(favorites) ? favorites.filter((id) => id === photo.id).length : 0}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;






