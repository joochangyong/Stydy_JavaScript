const COORDS = 'coords';

function saveCoords(coordsIbj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsIbj));
}

function handleGeoSucess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("con't access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError)
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoords();
    } else {

    }
}

function init() {
    loadCoords();
}

init();