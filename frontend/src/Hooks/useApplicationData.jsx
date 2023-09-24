import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  photoData: [],
  topicData: [],
};

const ACTIONS = {
  SET_PHOTOS: 'SET_PHOTOS',
  SET_TOPICS: 'SET_TOPICS',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PHOTOS:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPICS:
      return { ...state, topicData: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchPhotoData = async () => {
    try {
      const response = await axios.get('http://localhost:8001/api/photos');
      dispatch({ type: ACTIONS.SET_PHOTOS, payload: response.data });
    } catch (error) {
      console.error('Error fetching photo data:', error);
    }
  };

  const fetchTopicData = async () => {
    try {
      const response = await axios.get('http://localhost:8001/api/topics');
      dispatch({ type: ACTIONS.SET_TOPICS, payload: response.data });
    } catch (error) {
      console.error('Error fetching topic data:', error);
    }
  };

  const fetchPhotosByTopic = async (topicId) => {
    try {
      const response = await axios.get(`http://localhost:8001/api/topics/photos/${topicId}`);
      dispatch({ type: ACTIONS.SET_PHOTOS, payload: response.data });
    } catch (error) {
      console.error('Error fetching photos by topic:', error);
    }
  };

  useEffect(() => {
    fetchPhotoData();
    fetchTopicData();
  }, []);

  return { state, fetchPhotosByTopic };
};

export default useApplicationData;
