import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ handleCloseModal, selectedPhoto }) => {
  const [liked, setLiked] = useState(false);

  const handleToggleLike = () => {
    setLiked(prevLiked => !prevLiked);
  };

  const handleClose = () => {
    handleCloseModal(); // Invoke the provided close function
  };

  // Destructure the properties from selectedPhoto if available
  const { id, user, urls } = selectedPhoto || {};

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="modal-content">
        <div className="selected-photo">
          {urls && <img src={urls.full} alt={`Photo ${id}`} />}
          <button className={`like-button-modal ${liked ? 'liked' : ''}`} onClick={handleToggleLike}>
            <span className="heart-icon" role="img" aria-label="Heart">❤️</span> {/* Heart icon */}
            {liked ? 'Unlike' : 'Like'}
          </button>
        </div>
        <p>Selected Photo Details Here</p>
        <h2>Similar Photos</h2>
        <PhotoList excludePhotoId={id} favorites={liked ? [id] : []} toggleFavorite={handleToggleLike} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

