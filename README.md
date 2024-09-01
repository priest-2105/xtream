# Xtream

Xtream is a web application that allows users to discover popular movies, search for specific titles, and browse through a rich library of films. The application uses The Movie Database (TMDb) API to fetch and display movie data.

## Features

- **Hero Carousel**: A dynamic carousel showcasing the top 5 popular movies with detailed content such as ratings, genres, and overview.
- **Search Functionality**: Search for movies by title using the search bar.
- **Featured Movies Carousel**: A carousel that highlights a selection of popular movies.
- **Top Movies Carousel**: A separate carousel for top-rated movies.
- **Movie Grid**: Displays a grid of movie posters with the option to load more movies.
- **Movie Details**: Click on any movie to view more details on a separate page.

## Technologies Used

- **HTML5**: Markup language for structuring the application.
- **CSS3**: Styling the application, including carousels and layout.
- **JavaScript (ES6+)**: Logic and interaction handling, including API calls and dynamic content rendering.
- **Fetch API**: For making HTTP requests to The Movie Database API.
- **TMDb API**: Source of all movie data used in the application.

## Getting Started

### Prerequisites

- A basic web server to serve the files locally (optional but recommended).
- A modern web browser with JavaScript enabled.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/priest-2105/Xtream.git
   cd Xtream

### Set Up TMDb API:

1. Sign up on [The Movie Database (TMDb)](https://www.themoviedb.org/) to get an API key.
2. Replace the placeholder API key in the `main.js` file:
   ```javascript
   const APIKEY = "your_tmdb_api_key"; // Replace with your actual API key
