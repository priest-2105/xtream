const APIURL = "https://api.themoviedb.org/3/movie/";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

async function getMovieDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    
    if (!movieId) {
        console.error('No movie ID provided');
        return;
    }

    const resp = await fetch(`${APIURL}${movieId}?api_key=04c35731a5ee918f014970082a0088b1`);
    const movieData = await resp.json();
    
    updateMovieDetails(movieData);
}

function updateMovieDetails(movie) {
    document.querySelector('.movie-title').textContent = movie.title;
    document.querySelector('.movie-rating span:nth-child(2)').textContent = movie.vote_average.toFixed(1);
    document.querySelector('.movie-info span:nth-child(1)').textContent = `${Math.floor(movie.runtime / 60)}Hr : ${movie.runtime % 60}Mins`;
    document.querySelector('.movie-info span:nth-child(2)').textContent = new Date(movie.release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    document.querySelector('.movie-description p').textContent = movie.overview;

    const genresContainer = document.querySelector('.movie-genres');
    genresContainer.innerHTML = '';
    movie.genres.forEach(genre => {
        const genreSpan = document.createElement('span');
        genreSpan.classList.add('genre');
        genreSpan.textContent = genre.name;
        genresContainer.appendChild(genreSpan);
    });

    
}

document.addEventListener('DOMContentLoaded', getMovieDetails);