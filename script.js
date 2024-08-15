document.addEventListener('DOMContentLoaded', function() {
    typewriterEffect();
});

function getWeather() {
    const apiKey = '21d35b1ae86997c3aa63250e14aa8b66';
    const city = document.getElementById('city').value;

    if (city === '') {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch((error) => {
            console.error('Error fetching current weather data: ', error);
            alert('An error occurred while fetching current weather data');
        });

    fetch(forecastUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayHourlyForecast(data.list);
        })
        .catch((error) => {
            console.error('Error fetching forecast data: ', error);
            alert('An error occurred while fetching forecast data');
        });
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

        const temperatureHTML = `
            <p>${temperature}°C</p>
        `;
        const weatherInfoHTML = `
            <p>${cityName}</p>
            <p>${description}</p>
        `;
        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherInfoHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

function displayHourlyForecast(data) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    const next24Hours = data.slice(0, 8);

    next24Hours.forEach((item) => {
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <p>${hour}:00</p>
                <img src="${iconUrl}" alt="weather icon">
                <p>${temperature}°C</p>
            </div>
        `;
        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}

function typewriterEffect() {
    const footerText = document.getElementById('footer-text');
    const text = "August 16th 2024 || Developed By @nrk018 🧟‍♂️";
    let index = 0;
    let direction = 1;

    // Clear the initial content to start fresh
    footerText.textContent = '';

    function type() {
        if (direction === 1 && index < text.length) {
            footerText.textContent += text.charAt(index);
            index++;
        } else if (direction === -1 && index > 0) {
            footerText.textContent = footerText.textContent.slice(0, -1);
            index--;
        } else {
            direction *= -1; // Reverse the typing direction
        }
        
        setTimeout(type, 150); // Adjust typing speed by changing the timeout duration
    }

    type(); // Start the typewriter effect
}