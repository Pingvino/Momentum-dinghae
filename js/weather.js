const weather = document.querySelector("#weather div:first-child");
const city = document.querySelector("#weather div:last-child");
const APIKEY = "96c150035197be21de25a55b4428660d";

function getLocationAndWeather(here)
{
    const lat = here.coords.latitude;
    const lon = here.coords.longitude;
    // console.log(lat,lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;

    fetch(url).then((response) => response.json()).then((data) =>
    {
        // console.log(data.name);
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}ºC`;
    });
}

function geoErrCase() {
    alert("Can't find your location...");
}

navigator.geolocation.getCurrentPosition(getLocationAndWeather, geoErrCase);