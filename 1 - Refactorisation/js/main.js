import { getPosition } from "./geolocation.js";
import { getAddressFromCoords } from "./addressApi.js";
import { showError, hideError } from "./error.js";
import { waitFor } from "./utils.js";

const geolocationButton = document.querySelector('#geolocation');
const addressParagraph = document.querySelector('#address');

geolocationButton.addEventListener('click', () => {
    getPosition()
        .then(coords => getAddressFromCoords(coords))
        .then(address => {
            // console.log(address);
            addressParagraph.textContent = address;
        })
        .catch(error => {
            showError(error);
            waitFor(3).then(() => {
                hideError();
            });
        });
});