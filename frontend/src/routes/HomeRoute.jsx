import React, { useState, useEffect } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import TopicList from '../components/TopicList';
import SearchBar from '../components/SearchBar';
import useApplicationData from '../Hooks/useApplicationData';

const HomeRoute = ({ handleToggleModal, photoData }) => {
  const { state, handleSearch } = useApplicationData();

  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);

  const toggleFavorite = (photoId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(photoId)) {
        return prevFavorites.filter((id) => id !== photoId);
      } else {
        return [...prevFavorites, photoId];
      }
    });
  };

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="home-route">
      <TopNavigationBar
        likedCount={favorites.length}
        favorites={favorites}
        topics={state?.topicData}
        selectedTopic={selectedTopic}
        onSelectTopic={handleSelectTopic}
      />
      <SearchBar
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <PhotoList
        photos={state?.photoData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        handleToggleModal={handleToggleModal}
        searchTerm={searchTerm}
        selectedTopic={selectedTopic}
      />
      <TopicList
        topicData={state?.topicData}
        selectedTopic={selectedTopic}
        onSelectTopic={handleSelectTopic}
      />
    </div>
  );
};

export default HomeRoute;


