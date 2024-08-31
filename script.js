-function filterMovies(letter) {
    const movies = document.querySelectorAll('.movie');
    movies.forEach(movie => {
        const title = movie.getAttribute('data-title');
        if (title.startsWith(letter)) {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none';
        }
    });
}
