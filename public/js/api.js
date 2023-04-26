/*
email: dqswysupsyldkgisux@tpwlb.com
contraseña: pass1234
*/

const api_key = '5GhbTCmNoJ375d6eAx310rDCkIPeqk6I';
const id_gdl = '243735';


const day = `http://dataservice.accuweather.com/currentconditions/v1/${id_gdl}?$&language=es-mx&details=true&apikey=${api_key}`;
const day5 = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id_gdl}?apikey=${api_key}&language=es-mx&details=true&metric=true`;

let weatherData;

fetch(day)
    .then(response => response.json())
    .then(data => {
    showWeatherData(data);
    })
    .catch(error => console.error(error));

function showWeatherData(data) {
    addIcon(data);
    document.getElementById('weather-temp-now').innerText = data[0]['Temperature']['Metric']["Value"] + ' ºC';
    document.getElementById('weather-desc').innerText = data[0]['WeatherText'];
    
}

function addIcon(data){
    const img = document.createElement('img');
    const weatherIconLink = `https://developer.accuweather.com/sites/default/files/${data[0].WeatherIcon}-s.png`;
    img.src=weatherIconLink;
    document.getElementById('weather-icon').appendChild(img);
}


