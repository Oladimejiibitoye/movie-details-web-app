# Movie Details Web App

A simple web application to search and display movie details using the OMDB API.

## Features

- Search for movies by name.
- Display detailed movie information such as title, year, director, actors, plot, and more.
- Error handling with user-friendly messages.
- Logging using Winston.
- Secure headers with Helmet.
- Cross-Origin Resource Sharing (CORS) enabled.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/movie-details-web-app.git
   cd movie-details-web-app

2. **Clone the Repository**:
   ```bash
   npm install

3. **Set up Environment Variables**:
- In the project root directory, create a .env file
   ```bash
    touch .env

- Add the following environment variables to the .env file
    ```bash
    BASE_URL='http://www.omdbapi.com/'
    API_KEY='your-omdb-api-key'

3. **Running the App**:
- To run the application in production mode
   ```bash
    npm start

- To run the application in development mode (with live reload using Nodemon)
    ```bash
    npm run dev