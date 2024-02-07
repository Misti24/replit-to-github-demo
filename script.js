const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

const getWeather = (city) => {
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e2ef03c779msh98c0ec5d49898f1p1671b1jsn9d14f8640742',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(data => {
      // Update weatherInfo with data
      weatherInfo.innerHTML = `
        <h2>Weather for ${city}</h2>
        <p>Temperature: ${data.temp} &deg;C</p>
        <p>Feels like: ${data.feels_like} &deg;C</p>
        <p>Humidity: ${data.humidity}%</p>
        <p>Min temperature: ${data.min_temp} &deg;C</p>
        <p>Max temperature: ${data.max_temp} &deg;C</p>
        <p>Wind speed: ${data.wind_speed} km/hr</p>
        <p>Wind degrees: ${data.wind_degrees}</p>
        <p>Sunset: ${data.sunset}</p>
        <p>Sunrise: ${data.sunrise}</p>
      `;
    })
    .catch(error => console.error('Error fetching weather data:', error));
};

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = cityInput.value;
  getWeather(city);
});

// Default weather for a city
getWeather('Delhi');

