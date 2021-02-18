const weather = document.querySelector(".js-weather");

const API_KEY = "ee40d3275d31c079759531d0c8be2e8a"; 
const COORDS = "coords";

function getWeather(lat, lon){
     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
     ).then(function(response){
         return response.json();
     }).then(function(json){
         const temp = json.main.temp;
         const location = json.name;
         console.log(temp, location);
         weather.innerText = `${temp} @ ${location}`;
     });
}

function saveGeo(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, 
        longitude
    };
    saveGeo(coordsObj);
    getWeather(latutude, longitude);
}

function handleGeoError(){
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{ 
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude); 
    }
}


function init(){
    loadCoords();
}

init();