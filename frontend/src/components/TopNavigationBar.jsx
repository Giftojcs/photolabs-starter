import React from 'react';
import '../styles/TopNavigationBar.scss'
import Logo from "./AppLogo";
import TopicList from "./TopicList";
//import LikedPhotos from "./LikedPhotos";
import { FaHeart } from "react-icons/fa";

const TopNavigationBar = ({ likedCount, photoCategories }) => {
  return (
    <div className="top-nav-bar">
      <Logo />
      <TopicList photoCategories={photoCategories} />
      <div className="liked-photos">
        <FaHeart /> Total liked photos: {likedCount}
      </div>
    </div>
  );
};

export default TopNavigationBar;