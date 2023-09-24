import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicListItem from "./components/TopicListItem";
import TopNavigationBar from "./components/TopNavigationBar";

import './App.scss';

/*const photoData = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "2",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "3",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
];*/

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    label: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    label: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    label: "People",
  },
];

const App = () => {
  const likedCount = 5;
  const photoCategories = ["topic-1", "topic-2", "topic-3"]; 

  return (
    <div className="App">
      <TopNavigationBar likedCount={likedCount} photoCategories={photoCategories} />
      {/* Other components and content of your app */}
    </div>
  );
};

export default App;