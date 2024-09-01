Xtream
Xtream is a web application that allows users to discover popular movies, search for specific titles, and browse through a rich library of films. The application uses The Movie Database (TMDb) API to fetch and display movie data.

Features
Hero Carousel: A dynamic carousel showcasing the top 5 popular movies with detailed content such as ratings, genres, and overview.
Search Functionality: Search for movies by title using the search bar.
Featured Movies Carousel: A carousel that highlights a selection of popular movies.
Top Movies Carousel: A separate carousel for top-rated movies.
Movie Grid: Displays a grid of movie posters with the option to load more movies.
Movie Details: Click on any movie to view more details on a separate page.
Technologies Used
HTML5: Markup language for structuring the application.
CSS3: Styling the application, including carousels and layout.
JavaScript (ES6+): Logic and interaction handling, including API calls and dynamic content rendering.
Fetch API: For making HTTP requests to The Movie Database API.
TMDb API: Source of all movie data used in the application.
Getting Started
Prerequisites
A basic web server to serve the files locally (optional but recommended).
A modern web browser with JavaScript enabled.
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/priest-2105/Xtream.git
cd Xtream
Set Up TMDb API:

Sign up on The Movie Database (TMDb) to get an API key.
Replace the placeholder API key in the main.js file:
javascript
Copy code
const APIKEY = "your_tmdb_api_key"; // Replace with your actual API key
Run the Application:

Open index.html in your web browser to view the application.
Optionally, you can serve the files using a local development server like Live Server in VSCode.
Project Structure
index.html: The main entry point for the application.
style.css: Contains all the CSS styles for the application.
main.js: JavaScript file responsible for fetching data from the TMDb API, handling carousels, and rendering movie content.
moviedetails.html: Page template for displaying detailed information about a selected movie.
images/: Contains any static images used in the application.
How to Use
Explore Popular Movies:

The homepage displays a carousel of popular movies at the top. Scroll through the carousel to view different movies.
Click on any movie poster to view more details about that movie.
Search for Movies:

Use the search bar at the top to find specific movies by title.
The results will populate below the featured section.
Browse Movie Grid:

Scroll down to view more movies in the grid layout.
Click "Load More" to fetch and display additional movies.
Contributing
If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch with a descriptive name (git checkout -b feature-branch).
Make your changes and commit them (git commit -am 'Add new feature').
Push your changes to your branch (git push origin feature-branch).
Submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
TMDb: This product uses the TMDb API but is not endorsed or certified by TMDb.
FontAwesome: Icons used throughout the application.
Unsplash: Placeholder images for movies that do not have posters.
