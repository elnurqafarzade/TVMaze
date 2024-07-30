document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    if (movieId) {
        fetchMovieDetails(movieId);
    }
});




function fetchMovieDetails(movieId) {
    const apiUrl = `https://api.tvmaze.com/shows/${movieId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayMovieDetails(data);
        })
        .catch(error => {
            console.error('Error fetching movie details:', error);
        });
}

function displayMovieDetails(movie) {
   
    document.getElementById('title').innerText = movie.name;
    document.getElementById('img').src = movie.image ? movie.image.medium : '';
    document.getElementById('description').innerText = movie.summary.replace(/<\/?[^>]+(>|$)/g, ""); 
    document.getElementById('imdb').innerText = movie.rating.average;
    document.getElementById('language').innerText = movie.language;
    document.getElementById('genre').innerText = movie.genres[0] + "," + movie.genres[1] +","+ movie.genres[2]; 
    document.getElementById('release-date').innerText = movie.premiered;
    document.getElementById('ended-date').innerText = movie.ended;
    document.getElementById('website-button').onclick = () => {
        window.open(movie.officialSite);
    };        
  
}

