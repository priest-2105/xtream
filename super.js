const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

async function getMovies() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();
    return respData.results;
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
        <img src="${IMGPATH + movie.poster_path}" alt="${movie.title}">
        <div class="movie-card-details">
            <p>${movie.title}</p>
            <p>${movie.vote_average} ⭐</p>
        </div>
    `;
    return card;
}

async function initializeCarousels() {
    const movies = await getMovies();
    
    // Featured Movies Carousel
    const featuredCards = document.querySelector('.featured-movies .movie-cards');
    movies.slice(0, 10).forEach(movie => {
        featuredCards.appendChild(createMovieCard(movie));
    });

    // Top Movies Carousel
    const topMoviesCarousel = document.getElementById('top-movies-carousel');
    movies.slice(10, 15).forEach((movie, index) => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) item.classList.add('active');
        item.innerHTML = `
            <img src="${IMGPATH + movie.poster_path}" alt="${movie.title}">
            <div class="carousel-caption">
                <h3>${movie.title}</h3>
                <p>Rating: ${movie.vote_average}</p>
            </div>
        `;
        topMoviesCarousel.appendChild(item);
    });

    // More Movies Grid
    const movieGrid = document.getElementById('movie-grid');
    movies.slice(15).forEach(movie => {
        movieGrid.appendChild(createMovieCard(movie));
    });
}

function handleCarousel() {
    const cards = document.querySelector('.featured-movies .movie-cards');
    const prevButton = document.querySelector('.featured-movies .carousel-control.prev');
    const nextButton = document.querySelector('.featured-movies .carousel-control.next');
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = cards.querySelector('.movie-card').offsetWidth + 20; // +20 for gap
        cards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.children.length - 5) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
}

function handleTopMoviesCarousel() {
    const items = document.querySelectorAll('#top-movies-carousel .carousel-item');
    let currentSlide = 0;

    function changeSlide(direction) {
        items[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + items.length) % items.length;
        items[currentSlide].classList.add('active');
    }

    setInterval(() => changeSlide(1), 5000); // Auto-advance every 5 seconds
}

function handleLoadMore() {
    const loadMoreButton = document.getElementById('load-more');
    loadMoreButton.addEventListener('click', async () => {
        const movies = await getMovies();
        const movieGrid = document.getElementById('movie-grid');
        movies.slice(0, 10).forEach(movie => {
            movieGrid.appendChild(createMovieCard(movie));
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeCarousels();
    handleCarousel();
    handleTopMoviesCarousel();
    handleLoadMore();
});