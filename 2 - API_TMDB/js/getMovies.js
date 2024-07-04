import { showError } from "./error.js";

const url = 'https://api.themoviedb.org/3/search/movie?query='
const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTY2YTExNTE0M2I1ZWY3ZTQ3ZjNjZTVhMDExMjdmNSIsIm5iZiI6MTcyMDEwMTc0My40MzEwMjcsInN1YiI6IjY2ODY5MjY4OGUyM2YzMDFjZjE3ZTRlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AuhLzfUB01uzUD5aBzPJL22CPuCVmy3uczePC6LMwkw'
      }
};

export function getMovies(inputValue) {
    return fetch(url + inputValue, options)
        .then(response => response.json())
        .then(response => {
            return response.results;
        })
        .catch(err => {
            showError(err);
        });
}