import React, { useState } from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { photo, isFavorite, toggleFavorite } = props;

  const handleFavClick = (e) => {
    e.stopPropagation();
    toggleFavorite(photo.id);
  };

  return (
    <div className="photo-container" onClick={() => handlePhotoClick(photo.id)}>
      <img src={photo.urls.regular} alt={`Photo ${photo.id}`} />
      <button className={`like-button ${isFavorite ? 'liked' : ''}`} onClick={handleFavClick}>
        <span className="heart-icon" role="img" aria-label="Heart">
          ❤️
        </span>
      </button>
    </div>
  );
};

export default PhotoListItem;


