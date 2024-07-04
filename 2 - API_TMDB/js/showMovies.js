const moviesList = document.querySelector('#movies-list');

export function showMovies(movies) {
    for (let movie of movies) {
        console.log(movie);
        let img = document.createElement('img');
        img.srcset = movie.poster_path;
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'w-25');
        li.textContent = movie.title;
        moviesList.append(img);
        moviesList.append(li);
    }
}