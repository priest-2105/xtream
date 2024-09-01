document.addEventListener('DOMContentLoaded', () => {
    const APIURL = "https://api.themoviedb.org/3/";
    const APIKEY = "04c35731a5ee918f014970082a0088b1";
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const SEARCHAPI = `${APIURL}search/movie?api_key=${APIKEY}&query=`;
    const movieGrid = document.getElementById('movie-grid');
    const searchInput = document.querySelector('.nav-search input');
    const loadMoreButton = document.getElementById('load-more');

    let currentPage = 1;
    let currentSearchTerm = '';

    // Load movies on page load
    loadMovies();

    // Search movies
    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.trim();

        if (searchTerm && searchTerm !== currentSearchTerm) {
            currentSearchTerm = searchTerm;
            currentPage = 1;
            movieGrid.innerHTML = ''; // Clear previous movies
            loadMovies(true);
        } else if (!searchTerm) {
            currentSearchTerm = '';
            currentPage = 1;
            movieGrid.innerHTML = ''; // Clear previous movies
            loadMovies();
        }
    });

    // Load more movies
    loadMoreButton.addEventListener('click', () => {
        currentPage++;
        loadMovies();
    });

    // Load movies (fetch popular movies or search results)
    async function loadMovies(isSearch = false) {
        try {
            const url = isSearch ? `${SEARCHAPI}${currentSearchTerm}&page=${currentPage}` : `${APIURL}movie/popular?api_key=${APIKEY}&page=${currentPage}`;
            const resp = await fetch(url);
            if (!resp.ok) throw new Error('Failed to fetch movies');
            const data = await resp.json();

            displayMovies(data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    // Display movies in the grid
    function displayMovies(movies) {
        movies.forEach(movie => {
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `
                <img src="${movie.poster_path ? IMGPATH + movie.poster_path : '/api/placeholder/200/300'}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <span>${movie.vote_average?.toFixed(1) || 'N/A'}</span>
                </div>
            `;

            // Navigate to movie details on click
            movieEl.addEventListener('click', () => {
                localStorage.setItem('selectedMovieId', movie.id);
                window.location.href = './moviedetails.html';
            });

            movieGrid.appendChild(movieEl);
        });
    }
});
