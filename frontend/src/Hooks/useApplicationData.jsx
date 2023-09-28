import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  photoData: [],
  topicData: [],
  favorites: [],
};

const ACTIONS = {
  SET_PHOTOS: 'SET_PHOTOS',
  SET_TOPICS: 'SET_TOPICS',
  SET_FAVORITES: 'SET_FAVORITES',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PHOTOS:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPICS:
      return { ...state, topicData: action.payload };
    case ACTIONS.SET_FAVORITES:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const photosResponse = await axios.get(`/api/photos?searchTerm=${searchTerm}`);
        const topicsResponse = await axios.get('/api/topics');

        dispatch({ type: ACTIONS.SET_PHOTOS, payload: photosResponse.data });
        dispatch({ type: ACTIONS.SET_TOPICS, payload: topicsResponse.data });
      } catch (error) {
        // Removed console.log to avoid exposing sensitive data
      }
    };

    fetchData();
  }, [searchTerm]);

  const setFavorites = (favorites) => {
    dispatch({ type: ACTIONS.SET_FAVORITES, payload: favorites });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return { state, handleSearch, setFavorites };
};

export default useApplicationData;




