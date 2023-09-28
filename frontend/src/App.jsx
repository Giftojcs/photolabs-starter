import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './Hooks/useApplicationData';
import TopicListItem from './components/TopicListItem';
import LikedPhotos from './components/LikedPhotos';
import './App.scss';
import PhotoList from './components/PhotoList';
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  const [likedPhotosCount, setLikedPhotosCount] = useState(0);
  const handleLike = () => {
    // Update the liked photos count when a photo is liked
    setLikedPhotosCount(prevCount => prevCount + 1);
  };
  const { state } = useApplicationData(searchTerm, handleSearch);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log('isModalOpen:', !isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log('isModalOpen:', false);
  };

  

  return (
    <div className="App">
      {/* Pass state.photoData to HomeRoute */}
      <HomeRoute handleToggleModal={handleToggleModal} handleSearch={handleSearch} photoData={state?.photoData} />
      {isModalOpen && <PhotoDetailsModal handleCloseModal={handleCloseModal} />}
      <LikedPhotos />
      <div className="top-nav">
        <p>Liked Photos Count: {likedPhotosCount}</p>
      </div>
      <PhotoList handleLike={handleLike} />

    </div>
    
  );
};

export default App;


