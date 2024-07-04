import { showError } from "./error.js";

const baseUrl = 'https://api-adresse.data.gouv.fr';
const addressParagraph = document.querySelector('#address');

export function getAddressFromCoords(coords) {
    return fetch(`${baseUrl}/reverse/?lon=${coords.longitude}&lat=${coords.latitude}`)
            .then(response => response.json())
            .then(response => {
                if (response.features.length == 0) {
                    throw new Error("Aucune adresse ne correspond à ces coordonnées");    
                }
                return response.features[0].properties.label;
                // addressParagraph.textContent = response.features[0].properties.label;
            })
            .catch(error => {
                showError(error);
            });
}