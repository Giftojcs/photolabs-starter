import axios from 'axios';

const addPhoto = async (photoData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/photos', photoData);
    console.log('Photo added successfully!', response.data);
  } catch (error) {
    console.error('Error adding photo:', error);
  }
};

// Usage: Call this function with the photo data you want to add
const photoData = {
  title: 'Beautiful Sunset',
  imageUrl: 'https://example.com/sunset.jpg',
  description: 'A stunning sunset view.',
  username: 'john_doe',
  location: 'California',
  country: 'USA'
};

addPhoto(photoData);
