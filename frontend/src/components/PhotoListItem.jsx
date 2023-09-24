import React, { useState } from 'react';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ data }) => {
  const { urls, user, location } = data;
  const [isActive, setIsActive] = useState(false);

  const toggleLike = () => {
    setIsActive(!isActive);

    
  };

  return (
    <div className={`photo-list__item ${isActive ? 'active' : 'inactive'}`}>
      <img src={urls?.regular} alt={`Photo by ${user?.username}`} />
      <div className="photo-details">
        <h2>{user?.username}</h2>
        <p>{`${location?.city}, ${location?.country}`}</p>
        {/* Other details */}
      </div>
      {/* Favorite icon with click listener */}
      <div className="photo-list__fav-icon" onClick={toggleLike}>
        <svg
          className={`photo-list__fav-icon-svg ${isActive ? 'active' : 'inactive'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {/* Heart icon paths */}
          {isActive ? (
            <path
              fill="#FF0000" 
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          ) : (
            <path
              fill="#000000" 
              d="M0 0h24v24H0z" 
            />
          )}
        </svg>
      </div>
    </div>
  );
};

export default PhotoListItem;




