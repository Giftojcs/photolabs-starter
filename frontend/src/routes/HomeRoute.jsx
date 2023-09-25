import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import TopicList from '../components/TopicList';
import '../styles/HomeRoute.scss';
import useApplicationData from '../Hooks/useApplicationData';

const HomeRoute = ({ handleToggleModal, photoData, topicData }) => {
  const { state, fetchPhotosByTopic } = useApplicationData();
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(photoId)) {
        return prevFavorites.filter((id) => id !== photoId);
      } else {
        return [...prevFavorites, photoId];
      }
    });
  };

  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId); 
  };

  return (
    <div className="home-route">
      <TopNavigationBar
        favorites={favorites}
        topics={topicData} 
        onTopicClick={handleTopicClick} 
      />
      <PhotoList
        photos={state?.photoData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        handleToggleModal={handleToggleModal}
      />
      <TopicList topicData={topicData} />
    </div>
  );
};

export default HomeRoute;