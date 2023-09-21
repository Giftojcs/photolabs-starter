import React from 'react';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props;

  return (
    <div className="photo-list-item"> {/* Apply the class for styling */}
      <img src={imageSource} alt={`Photo ${id}`} />
      <div className="photo-details">
        <div className="profile">
          <div className="profile-image">
            <img src={profile} alt={`Profile ${username}`} />
          </div>
          <div className="profile-info">
            <span>{username}</span>
          </div>
        </div>
        <div className="location">{`${location.city}, ${location.country}`}</div>
      </div>
    </div>
  );
};

export default PhotoListItem;


