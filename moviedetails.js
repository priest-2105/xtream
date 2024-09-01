document.addEventListener('DOMContentLoaded', () => {
    const APIURL = "https://api.themoviedb.org/3/";
    const APIKEY = "04c35731a5ee918f014970082a0088b1";
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    // Get the selected movie ID from localStorage
    const movieId = localStorage.getItem('selectedMovieId');

    // Fetch movie details using the movie ID
    async function getMovieDetails() {
        try {
            const resp = await fetch(`${APIURL}movie/${movieId}?api_key=${APIKEY}`);
            if (!resp.ok) throw new Error('Failed to fetch movie details');
            const movie = await resp.json();

            // Update the HTML with movie details
            updateMovieDetails(movie);

            // Fetch and display recommended movies
            getRecommendedMovies(movie.genres);
        } catch (error) {
            console.error('Error fetching movie details:', error);
            // Optionally, show a user-friendly error message
        }
    }

    // Update the HTML with movie details
    function updateMovieDetails(movie) {
        document.querySelector('.movie-title').textContent = movie.title || 'Unknown Title';
        document.querySelector('.movie-rating .stars').innerHTML = getStarRating(movie.vote_average);
        document.querySelector('.movie-rating span').textContent = movie.vote_average?.toFixed(1) || 'N/A';
        document.querySelector('.movie-info').innerHTML = `
            <span>${Math.floor(movie.runtime / 60) || 0} Hr : ${movie.runtime % 60 || 0} Mins</span>
            <span>${new Date(movie.release_date).getFullYear() || 'Unknown Year'}</span>
            <span>${movie.popularity?.toFixed(1) || 'N/A'} views</span>
        `;
        document.querySelector('.movie-genres').innerHTML = movie.genres?.map(genre => `<span class="genre">${genre.name}</span>`).join('') || '<span class="genre">N/A</span>';
        document.querySelector('.movie-description').textContent = movie.overview || 'No description available.';

        // Update trailer image (if any)
        const trailerImage = document.querySelector('.trailer img');
        if (movie.backdrop_path) {
            trailerImage.src = IMGPATH + movie.backdrop_path;
            trailerImage.alt = movie.title;
        } else {
            trailerImage.src = '/api/placeholder/560/315';
            trailerImage.alt = 'Trailer placeholder';
        }
    }

    // Get star rating in stars
    function getStarRating(rating) {
        const fullStars = Math.floor(rating / 2);
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars += '<span><i class="fa fa-star"></i></span>';
            } else {
                stars += '<span><i class="fa fa-star-o"></i></span>';
            }
        }
        return stars;
    }

    // Fetch recommended movies based on genres
    async function getRecommendedMovies(genres) {
        if (genres.length === 0) return;

        // Get the genre IDs
        const genreIds = genres.map(genre => genre.id).join(',');

        try {
            const resp = await fetch(`${APIURL}discover/movie?api_key=${APIKEY}&with_genres=${genreIds}`);
            if (!resp.ok) throw new Error('Failed to fetch recommended movies');
            const movies = await resp.json();

            displayRecommendedMovies(movies.results);
        } catch (error) {
            console.error('Error fetching recommended movies:', error);
            // Optionally, show a user-friendly error message
        }
    }

    // Display recommended movies in the HTML
    function displayRecommendedMovies(movies) {
        const recommendedMoviesContainer = document.querySelector('.recommended-movies');
        recommendedMoviesContainer.innerHTML = '';

        movies.forEach(movie => {
            const movieEl = document.createElement('div');
            movieEl.classList.add('recommended-movie');
            movieEl.innerHTML = `
                <img src="${IMGPATH + movie.poster_path}" alt="${movie.title}">
            `;
            recommendedMoviesContainer.appendChild(movieEl);
        });
    }

    // Initialize movie details page
    getMovieDetails();
});
