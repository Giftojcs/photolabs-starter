**PhotoLabs Project**

Welcome to the PhotoLabs Application Project! This project aims to showcase a React-based single-page application (SPA) that allows users to view photos in various contexts. We will leverage a pre-existing API to create an engaging user experience for interacting with photos.

**Project Description**
In this project, we are building a client-side application using the React view-layer library, focusing on creating a seamless user experience for exploring and interacting with photos. The application, named PhotoLabs, will enable users to view photos from different categories, view them in a larger format, like them, and more.

**Project Structure**
Our project will be structured to harmoniously combine frontend and backend components. The frontend development will demonstrate expertise in React, while the backend will utilize Node.js and a PostgreSQL database for dynamic logic and seamless data management.

**Goal:**
The primary goal of this project is to build a client-side application using React, enhancing the user's experience in viewing and interacting with photos.

**Screenshots:**

PhotoLabs HomePage

![PhotoLabs HomePage](https://github.com/Giftojcs/photolabs-starter/assets/105958169/c23c2223-6f4d-4944-8ee5-c8002ad6c242)

PhotoLabs HomePage Liked Photo

![PhotoLabs Licked Photo](https://github.com/Giftojcs/photolabs-starter/assets/105958169/b8728978-101b-48a7-9a0a-063df83dda24)


Photo Detail Modal

![Photo Detail Modal](https://github.com/Giftojcs/photolabs-starter/assets/105958169/09315ea9-c337-456a-b2e4-065ece5b85dd)

Top Navigation Bar
![Top Navigation Bar](https://github.com/Giftojcs/photolabs-starter/assets/105958169/6fcdfa30-7338-465e-8e4a-a09a1463b614)

**Functional Requirements:**

Client-Side Application (PhotoLabs)
Development of a React-based single page application (SPA) called PhotoLabs.
The application will communicate with the API server over HTTP using the JSON format.
Server and Persistence Layer

Data Layer:
PostgreSQL database will serve as the data layer.

API Server:
Express.js will be the basis for the PhotoLabs API server application.

Behavioral Requirements
PhotoLabs is designed to provide an intuitive and enjoyable experience for users interacting with photos.

Users can view photos from the homepage loaded from the API.
Users can navigate to different photo categories, also known as topics.
Users can click on a photo to view a larger version of the photo and relevant/similar photos.
Users can like a photo from anywhere within the application where the photo is displayed.
Users can view a heart icon with a notification in the navigation if there are liked photos.
The navigation will consist of different topics and a heart icon.
The client-side application will make API requests to load and persist data, ensuring relevant data is not lost after a session restarts or browser refresh.
Technical Specifications
The PhotoLabs client application will be built using the following technologies and tools:

React: Building the client-side application using the React view-layer library.
Create React App: Utilizing Create React App (CRA) to bootstrap the project.
Webpack: Utilizing Webpack for module bundling and development server.
Babel: Using Babel for transpiling modern JavaScript.
The backend will utilize:

Express: Using Express as the basis for the PhotoLabs API server application.
Note: During development, two different servers will be running - the client-side Webpack development server and the API server to provide photo data
