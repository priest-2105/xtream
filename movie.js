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

async function initializeHeroCarousel() {
    const movies = await getMovies();
    const heroCarouselItems = document.querySelector('.hero-carousel-items');
    const heroContent = document.querySelector('.hero-content');

    movies.slice(0, 5).forEach((movie, index) => {
        const item = document.createElement('div');
        item.classList.add('hero-carousel-item');
        if (index === 0) item.classList.add('active');
        item.innerHTML = `<img src="${IMGPATH + movie.backdrop_path}" alt="${movie.title}">`;
        heroCarouselItems.appendChild(item);
    });

    updateHeroContent(movies[0]);
    return movies.slice(0, 5);
}

function updateHeroContent(movie) {
    const heroContent = document.querySelector('.hero-content');
    heroContent.innerHTML = `
        <div class="top-hero-content">
            <div class="pg">PG</div>
            <ul>
                <li>${movie.genre_ids[0]}</li>
                <li>${movie.genre_ids[1] || ''}</li>
                <li>${movie.genre_ids[2] || ''}</li>
            </ul>
        </div>
        <h1>${movie.title}</h1>
        <p>${movie.overview}</p>
        <div class="hero-rating">
            <div class="stars">
                ${getStarRating(movie.vote_average)}
            </div>
            <span class="rating">${movie.vote_average.toFixed(1)}</span>
            <span>IMDb</span>
            <span>${Math.floor(movie.runtime / 60)}HR : ${movie.runtime % 60}MINs</span>
            <span><b>Genre:</b> ${getGenreName(movie.genre_ids[0])}</span>
        </div>
        <a href="#" class="btn">Stream Now <i class="fa fa-play"></i></a>
    `;
}

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

function getGenreName(genreId) {
    return 'Action'; // This is a placeholder. You should implement a proper genre mapping.
}

function handleHeroCarousel(movies) {
    const items = document.querySelectorAll('.hero-carousel-item');
    const prevButton = document.querySelector('.hero-carousel-control.prev');
    const nextButton = document.querySelector('.hero-carousel-control.next');
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach(item => item.classList.remove('active'));
        items[currentIndex].classList.add('active');
        updateHeroContent(movies[currentIndex]);
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });
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

document.addEventListener('DOMContentLoaded', async () => {
    const heroMovies = await initializeHeroCarousel();
    handleHeroCarousel(heroMovies);
    initializeCarousels();
    handleCarousel();
    handleTopMoviesCarousel();
    handleLoadMore();
});