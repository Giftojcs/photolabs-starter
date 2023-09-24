import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './Hooks/useApplicationData';
import TopicListItem from './components/TopicListItem';
import './App.scss';

const App = () => {
  const { state } = useApplicationData();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <HomeRoute handleToggleModal={handleToggleModal} photoData={state?.photoData} />
      {isModalOpen && <PhotoDetailsModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default App;
