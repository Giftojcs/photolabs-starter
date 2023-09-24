import React from "react";
import { FaHeart } from "react-icons/fa";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ data }) => {
  const { id, slug, title, user } = data;

  return (
    <div className="topic-list-item">
      <div className="user-profile">
        {user && user.profile && <img src={user.profile} alt={`${user.username}'s profile`} className="user-profile-image" />}
        {user && user.username && <span className="username">{user.username}</span>}
      </div>
      <img src="path/to/image.jpg" alt={title} className="topic-image" />
      <div className="topic-details">
        <p>ID: {id}</p>
        <p>Slug: {slug}</p>
        <p>Title: {title}</p>
      </div>
      <div className="like-button">
        <FaHeart />
      </div>
    </div>
  );
};

export default TopicListItem;
