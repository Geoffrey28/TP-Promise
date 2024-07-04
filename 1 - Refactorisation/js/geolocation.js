export function getPosition(baseUrl) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            resolve(position.coords);
        }, error => {
            console.error(`Erreur : ${error.code}`);
        }, {enableHighAccuracy: true});
    })
}