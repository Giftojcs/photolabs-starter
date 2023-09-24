import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photoData, favorites, toggleFavorite, handleToggleModal }) => {
  return (
    <ul className="photo-list">
      {photoData.map((photo) => (
        <li key={photo.id} className="photo-item" onClick={() => handleToggleModal(photo.id)}>
          <PhotoListItem
            key={photo.id}
            photo={photo}
            isFavorite={favorites && favorites.includes(photo.id)}
            toggleFavorite={() => toggleFavorite(photo.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;





