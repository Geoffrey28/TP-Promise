import { getMovies } from "./getMovies.js";
import { showMovies } from "./showMovies.js";
import { showError } from "./error.js";

const form = document.querySelector('form');
const searchInput = document.querySelector('#search');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getMovies(searchInput.value)
        .then(movies => showMovies(movies))
        .catch(error => {
            showError(error);
        });
});