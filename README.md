**PhotoLabs Project**

Welcome to the PhotoLabs Application Project! This project aims to showcase a React-based single-page application (SPA) that allows users to view photos in various contexts. We will leverage a pre-existing API to create an engaging user experience for interacting with photos.

**Project Description**
In this project, we are building a client-side application using the React view-layer library, focusing on creating a seamless user experience for exploring and interacting with photos. The application, named PhotoLabs, will enable users to view photos from different categories, view them in a larger format, like them, and more.

**Project Structure**
Our project will be structured to harmoniously combine frontend and backend components. The frontend development will demonstrate expertise in React, while the backend will utilize Node.js and a PostgreSQL database for dynamic logic and seamless data management.

**Goal:**
The primary goal of this project is to build a client-side application using React, enhancing the user's experience in viewing and interacting with photos.

## Setup

Install dependencies with `npm install`.

## Creating The DB

Use the `psql -U labber` command to login to the PostgreSQL server with the username `labber` and the password `labber`. This command **MUST** be run in a vagrant terminal, we are using the PostgreSQL installation provided in the vagrant environment. M1/M2 and WSL2 users can execute this command in their terminal.

Create a database with the command `CREATE DATABASE photolabs_development;`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

## Seeding

Run a the development server with `npm start` in the Host environment. We are only using vagrant for `psql` this week.

Both of these achieve the same result.

- Make a `GET` request to `/api/debug/reset` with `curl http://localhost:8001/api/debug/reset`.
- Use the browser to navigate to `http://localhost:8001/api/debug/reset`.

## Run The Server

Running the server normally

npm start

Running the server so it returns an error when saving/deleting for testing the client's error handling capabilities

npm run error

**Screenshots:**

PhotoLabs
![Photolab main ](https://github.com/Giftojcs/photolabs-starter/assets/105958169/f1666b46-be8f-4fdd-83b0-27ad61575a2a)

Photo Detail Modal
![Modal Photo](https://github.com/Giftojcs/photolabs-starter/assets/105958169/0c6a67b4-c2c5-47a2-ad0a-b05fd255ea98)

Top Navigation Bar
![TopNavigationBar](https://github.com/Giftojcs/photolabs-starter/assets/105958169/2727e512-d4ab-4209-82b4-6900a62e6820)

Favorite Photo Click Count
![FavoritePhotoCount](https://github.com/Giftojcs/photolabs-starter/assets/105958169/7f2a7cab-12e7-429d-8bb3-f99cc38cb3e3)

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
