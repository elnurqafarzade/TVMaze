document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();
});

function fetchMovies() {
    const apiUrl = 'https://api.tvmaze.com/shows';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayMovies(data);
        })
        .catch(error => {
            console.error('Error fetching movie list:', error);
        });
}

function displayMovies(movies) {
    const movieList = document.getElementById('movie-list');

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
            <img src="${movie.image ? movie.image.medium : ''}" alt="${movie.name}">
            <h3>${movie.name}</h3>
            <p>Premiere: ${movie.premiered}</p>
            <p>IMDB Rating: ${movie.rating.average}</p>
            <p>Genre: ${movie.genres.join(', ')}</p>
            <p>Language: ${movie.language}</p>
            <div class="buttons">
                <button class="website-btn" onclick="window.open('${movie.officialSite}')">Go to website</button>
                <button class="detail-btn" onclick="goToDetail(${movie.id})">Go to detail</button>
            </div>
        `;

        movieList.appendChild(movieCard);
    });
}

function goToDetail(id) {
    window.location.href = `details.html?id=${id}`;
}
