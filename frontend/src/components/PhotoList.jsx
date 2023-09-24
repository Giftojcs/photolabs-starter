import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import mockPhotos from '../mocks/photos';

const PhotoList = ({ favorites, toggleFavorite, handleToggleModal, excludePhotoId }) => {
  const filteredPhotoData = mockPhotos.filter(photo => photo.id !== excludePhotoId);

  const handleToggleFavorite = (photoId) => {
    toggleFavorite && toggleFavorite(photoId);
    console.log('Toggled favorite in PhotoList:', photoId);
  };

  const handlePhotoClick = (photoId) => {
    handleToggleModal && handleToggleModal(photoId);
  };

  return (
    <div className="photo-list">
      {filteredPhotoData.map((photo) => (
        <div key={photo.id} className="photo-item" onClick={() => handlePhotoClick(photo.id)}>
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
              className={`like-button ${favorites && favorites.includes(photo.id) ? 'liked' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handleToggleFavorite(photo.id);
              }}
            >
              <span className="heart-icon" role="img" aria-label="Heart">❤️</span> {/* Heart icon */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;





