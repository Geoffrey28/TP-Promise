const moviesList = document.querySelector('#movies-list');

export function showMovies(movies) {
    for (let movie of movies) {
        console.log(movie);
        let item = document.createElement('li');
        item.classList.add('list-group-item', 'w-25');
        let title = document.createElement('h3');
        title.textContent = movie.title;
        let description = document.createElement('p');
        description.textContent = movie.overview;
        item.append(title, description);
        moviesList.append(item);
    }
}