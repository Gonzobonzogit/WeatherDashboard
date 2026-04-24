//API Utilities


const weather_API_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const GEO_API_URL = 'https://geocode.maps.co/search';
let currentUnit = 'imperial';
let currentWeatherData = null;

//DOM Selection

const searchForm = document.getElementById('search-form');

const cityInput = document.getElementById('city-input');

const currentWeatherDiv = document.getElementById('current-weather');


const forecastContainer = document.getElementById('forecast-container');
const tempToggle = document.getElementById('temp-toggle');
const historyContainer = document.getElementById('history-container');

//Event listeners
searchForm.addEventListener('submit', handleSearch);
tempToggle.addEventListener('click', toggleTemperature);
const geoBtn =document.getElementById('geo-btn');
geoBtn.addEventListener('click', getLocalWeather);

//Temp toggle

function toggleTemperature(){
    if (currentUnit === 'imperial') {
        currentUnit = 'metric';
        tempToggle.textContent = 'Switch to °F';
    } else {
        currentUnit = 'imperial';
        tempToggle.textContent ='Switch to °C';
    }
    localStorage.setItem('tempUnit', currentUnit);

    if (currentWeatherData) {
        displayCurrentWeather(currentWeatherData.data, currentWeatherData.cityName);
        displayForecast(currentWeatherData.data);
    }
}

function convertTemp(temp) {
    if (currentUnit === 'metric') {
        return ((temp - 32)* 5/9).toFixed(1);
    }
    return temp.toFixed(1);
}

function getTempUnit() {
    return currentUnit === 'imperial' ? '°F' : '°C';
}

//INITIALIZATION

loadSearchHistory();

//SEARCH FUNCTIONS

function handleSearch(event) {
    event.preventDefault();
    const cityName = cityInput.value.trim();
if (!cityName) {
    alert('Please enter a valid city name');
    cityInput.focus();
    cityInput.style.borderColor = 'red';
    return;
}
if (cityName.length < 2 ) {
    showError('City name must be longer than 2 characters');
    return;
}

cityInput.value = '';
showLoading();
getCoordinates(cityName);
}

function showError(message) {
    clearError();
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <img src="./Assets/images/(panic).jpg" alt="Panic!!" class="error-image">
        <p>${message}<p>
    `;
    searchForm.append(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

function clearError() {
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

}

function showLoadingSpinner() {
    currentWeatherDiv.innerHTML = '<p class= "loading">Loading....</p>';
}


//GeoCoding Funcition

function getCoordinates(cityName) {
    const url = `${GEO_API_URL}?q=${encodeURIComponent(cityName)}&api_key=${GEO_KEY}`;

    fetch(url)
        .then(response => {
            //Check response
            if(!response.ok) throw new Error(`HTTP error! Status:${response.status}`);
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
            alert('City not found. Please try again.');
            hideLoading();
            return;
        }

        const { lat, lon, display_name } = data[0];
        getWeather(lat, lon, display_name);
    })
    .catch(error => {
        console.error('Error fetching coordinates:', error);
        alert('An error occured. Please try again.');
        hideLoading();

    });    
}


//Grabbing the forecast

function getWeather(lat, lon, cityName) {
    const url = `${weather_API_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;

    fetch(url)
        .then(response =>{
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            currentWeatherData = { data, cityName }
            displayCurrentWeather(data, cityName);
            displayForecast(data);
            saveToHistory(cityName)
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            alert('Unable to fetch weather data. Please try again.');
            hideLoadingSpinner();
        });
}

//Displaying Current Weather

function displayCurrentWeather(weatherData, cityName) {
    const current = weatherData.list[0];
    const temperature = current.main.temp;
    const humidity = current.main.humidity;
    const windSpeed = current.wind.speed;
    const weatherIcon = current.weather[0].icon;
    const weatherDescription = current.weather[0].description;
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    const html = `
        <div class="weather-details">
            </div>
            <div class="weather-detail-item">
            <strong>Temperature:</strong> ${temperature}${getTempUnit()}
            <div>
                <strong>Wind Speed:</strong> ${windSpeed.toFixed(1)} mph
            </div>
            <div class="weather-detail-item">
                <strong>Humidity:</strong> ${humidity}%
            </div>
        </div>        
    `;

    currentWeatherDiv.innerHTML = html;
    hideLoading();
}

function displayForecast(weatherData) {
    const forecastDays = weatherData.list
        .filter(item => item.dt_txt.includes('12:00:00'))
        .slice(0, 5);

    forecastContainer.innerHTML = '';


//Card Creation
    forecastDays.forEach(day => {
        const date = new Date(day.dt_txt);
        const formattedDate = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });

    
        const temp = day.main.temp;
        const wind = day.wind.speed;
        const humidity = day.main.humidity;
        const icon = day.weather[0].icon;
        const description = day.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

//Card HTML 
        const card = document.createElement('div');
            card.className = 'forecast-card';
            card.innerHTML =`
                <h4>${formattedDate}</h4>
                <img src="${iconUrl}" alt="${description}">
                <p><strong>Temp:</strong> ${Math.round(temp)}${getTempUnit()}</p>
                <p><strong>Wind:</strong> ${wind.toFixed(1)} mph</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
            `;
        forecastContainer.appendChild(card);
    });
}

// Local storeage function

function saveToHistory(cityName) {
    let history = localStorage.getItem('weatherSearchHistory');

    if (history) {
        history = JSON.parse(history);
    } else {
        history = [];
    }

    if (history.includes(cityName)) {
        return;
    }

    history.unshift(cityName);

    if (history > 8) {
        history = history.slice(0, 8);
    }

    localStorage.setItem('weatherSearchHistory', JSON.stringify(history));
    loadSearchHistory();
}

const savedUnit = localStorage.getItem('tempUnit');
if (savedUnit) {
    currentUnit = savedUnit;
    tempToggle.textContent = currentUnit === 'imperial' ? 'Switch to °C' : 'Switch to °F';
}

function loadSearchHistory() {
    const history = localStorage.getItem('weatherSearchHistory');

    historyContainer.innerHTML = '';

    if(!history){
        historyContainer.innerHTML = '<p class ="no-history">No search history yet</p>';
        return;
    }

    const cities = JSON.parse(history);

    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear History';
    clearBtn.className = 'clear-history-btn';
    clearBtn.addEventListener('click', () => {
        if (confirm('Clear all search history?')) {
            localStorage.removeItem('weatherSearchHistory');
            loadSearchHistory();
        }
    });
    historyContainer.appendChild(clearBtn);

    //separator
const separator = document.createElement('hr');
historyContainer.appendChild(separator);


    cities.forEach(city => {
        const button = document.createElement('button');
        button.textContent = city;
        button.className = 'history-btn';
        button.addEventListener('click', () =>{
            showLoading();
            getCoordinates(city);
        });
        historyContainer.appendChild(button);
    });
}


function showLoading(){
    currentWeatherDiv.innerHTML = '<p class="loading">Loading weather data...</p>';
    forecastContainer.innerHTML = '';
}

function hideLoading(){

}

function getLocalWeather() {
    if (!navigator.geolocation) {
        console.log('Geolocation not avalaible!!');
        return;
    }

    showLoading();

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeather(lat, lon, 'Your Location');
        },
        (error) => {
            console.error('Geolocation Error:', error);
            hideLoading;
        }
    );
}




loadSearchHistory();



