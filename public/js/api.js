/*
email: dqswysupsyldkgisux@tpwlb.com
contraseña: pass1234
*/

const api_key = 'Q8TwVjRYGlb8NRkFtT9yAfE7ITMdSu1F';
const id_gdl = '243735';


const day = `https://dataservice.accuweather.com/currentconditions/v1/${id_gdl}?$&language=es-mx&details=true&apikey=${api_key}`;
const day5 = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${id_gdl}?apikey=${api_key}&language=es-mx&details=true&metric=true`;

fetch(day)
    .then(response => response.json())
    .then(data => {
    showWeatherDataToday(data);
    })
    .catch(error => console.error(error));

fetch(day5)
    .then(response => response.json())
    .then(data => {
        showWeatherDataWeek(data);
    })
    .catch(error => console.error(error));

function showWeatherDataToday(data) {
    addIcon(data, 'weather-icon-today');
    document.getElementById('weather-today-temp').innerText = data[0]['Temperature']['Metric']["Value"] + ' ºC';
    document.getElementById('weather-today-temp-desc').innerText = data[0]['WeatherText'];
    document.getElementById('weather-today-uv').innerText = data[0]['UVIndex'] + ' - ' + data[0]['UVIndexText'];
    document.getElementById('weather-today-realsens').innerText = data[0]['RealFeelTemperature']['Metric']['Value'] + ' °C';
    document.getElementById('weather-today-humidity').innerText = data[0]['RelativeHumidity'] + ' %';
    document.getElementById('weather-today-wind').innerText = data[0]['Wind']['Speed']['Metric']['Value'] + ' km/h';
    document.getElementById('weather-today-cloud').innerText = data[0]['CloudCover'] + ' %';
    
}

function showWeatherDataWeek(data) {
    document.getElementById('weather-today-precipitation').innerText = data['DailyForecasts'][0]['Day']['PrecipitationProbability'] + ' %';
    document.getElementById('weather-today-temp-minmax').innerText = 'Min: ' + data['DailyForecasts'][0]['Temperature']['Minimum']['Value'] + ' °C - Max: ' + data['DailyForecasts'][0]['Temperature']['Maximum']['Value'] + ' °C';
    document.getElementById('weather-day1-temp-minmax').innerText = data['DailyForecasts'][0]['Temperature']['Minimum']['Value'] + '° / ' + data['DailyForecasts'][1]['Temperature']['Maximum']['Value'] + '°';
    document.getElementById('weather-day2-temp-minmax').innerText = data['DailyForecasts'][1]['Temperature']['Minimum']['Value'] + '° / ' + data['DailyForecasts'][1]['Temperature']['Maximum']['Value'] + '°';
    document.getElementById('weather-day3-temp-minmax').innerText = data['DailyForecasts'][2]['Temperature']['Minimum']['Value'] + '° / ' + data['DailyForecasts'][2]['Temperature']['Maximum']['Value'] + '°';
    document.getElementById('weather-day4-temp-minmax').innerText = data['DailyForecasts'][3]['Temperature']['Minimum']['Value'] + '° / ' + data['DailyForecasts'][3]['Temperature']['Maximum']['Value'] + '°';
    document.getElementById('weather-day5-temp-minmax').innerText = data['DailyForecasts'][4]['Temperature']['Minimum']['Value'] + '° / ' + data['DailyForecasts'][4]['Temperature']['Maximum']['Value'] + '°';
    AddIcon5(data, 'weather-day1-icon', 0);
    AddIcon5(data, 'weather-day2-icon', 1);
    AddIcon5(data, 'weather-day3-icon', 2);
    AddIcon5(data, 'weather-day4-icon', 3);
    AddIcon5(data, 'weather-day5-icon', 4);
}

function addIcon(data, idElement){
    const img = document.createElement('img');
    const numLogo = data[0].WeatherIcon < 10 ? '0' + data[0].WeatherIcon : data[0].WeatherIcon;
    const weatherIconLink = `https://developer.accuweather.com/sites/default/files/${numLogo}-s.png`;
    img.src=weatherIconLink;
    img.classList = ['w-full'];
    document.getElementById(idElement).appendChild(img);
}

function AddIcon5(data, idElement, numDay){
    const img = document.createElement('img');
    const numLogo = data['DailyForecasts'][numDay]['Day']['Icon'] < 10 ? '0' + data['DailyForecasts'][numDay]['Day']['Icon'] : data['DailyForecasts'][numDay]['Day']['Icon'];
    const weatherIconLink = `https://developer.accuweather.com/sites/default/files/${numLogo}-s.png`;
    img.src=weatherIconLink;
    document.getElementById(idElement).appendChild(img);
}


