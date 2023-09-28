import React from 'react';
import '../styles/TopNavigationBar.scss';
import { FaHeart } from 'react-icons/fa';

const TopNavigationBar = ({ likedCount, onTopicClick, favorites, topics }) => {
  const notificationCount = favorites.length;

  return (
    <div className="top-nav-bar">
      <div className="logo">
        {/* Placeholder for logo */}
        PHOTOLABS
      </div>

      <div className="topics">
        {/* Render topics dynamically */}
        {topics.map((topic) => (
          <div key={topic.id} className="topic" onClick={() => onTopicClick(topic)}>
            {topic.title}
          </div>
        ))}
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



