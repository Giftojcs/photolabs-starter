import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ liked, toggleLike }) => {
  const buttonClass = liked ? 'liked' : 'not-liked';

  return (
    <button className={`photo-list__fav-icon ${buttonClass}`} onClick={toggleLike}>
      {/* Add your favorite icon SVG or image here */}
    </button>
  );
};


export default PhotoFavButton;
