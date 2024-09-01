const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



async function getMovies() {
    const resp = await fetch(APIURL)
    const respData = await resp.json();

    console.log(respData);
    
    respData.results.forEach(movie => {
        const img = document.createElement("img")
        img.src = IMGPATH + "/" + movie.poster_path

        document.body.appendChild(img)
    });

    return respData
}

getMovies();






// Get all cards
const cards = document.querySelectorAll('.card');

// Initialize current index
let currentIndex = 0;

// Function to update the slider
function updateSlider(index) {
    const cardWidth = cards[0].offsetWidth + 20; // Card width plus gap
    const offset = index * cardWidth;
    document.querySelector('.cards').style.transform = `translateX(-${offset}px)`;
}

// Add event listeners to cards for click
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});
