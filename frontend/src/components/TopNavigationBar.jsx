import React from 'react';
import '../styles/TopNavigationBar.scss';
import { FaHeart } from 'react-icons/fa';

const TopNavigationBar = ({ likedCount, onTopClick, favorites }) => {
  const notificationCount = favorites.length;

  return (
    <div className="top-nav-bar">
      <div className="logo">
        {/* Placeholder for logo */}
        PHOTOLABS
      </div>

      <div className="topics">
        <div className="topic">Nature</div>
        <div className="topic">Travel</div>
        <div className="topic">People</div>
        <div className="topic">Fashion</div>
        <div className="topic">Animals</div>
      </div>

      <div className="liked-photos">
        <FaHeart /> Total liked photos: {likedCount}
      </div>

      <div className="heart-icon">
        <i className="fa fa-heart"></i>
        {notificationCount > 0 && (
          <div className="notification-count">{notificationCount}</div>
        )}
      </div>
    </div>
  );
};

export default TopNavigationBar;


