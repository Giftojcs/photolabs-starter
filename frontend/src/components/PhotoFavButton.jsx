import React from 'react';

const PhotoFavButton = ({ onClick, isFavorite }) => {
  return (
    <button onClick={onClick}>
      {isFavorite ? 'Favorite' : 'Not Favorite'}
      {/* You can use your favorite icon SVG or image here */}
      {isFavorite ? '❤️' : '🖤'}
    </button>
  );
};

export default PhotoFavButton;

