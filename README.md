# Weather Web App 🌦️

A web application that provides real-time weather updates and hourly forecasts for any city using the OpenWeather API.


https://github.com/user-attachments/assets/f0c7d424-f12c-4b91-800f-1290e281bcf0




## Features

- **City Search:** Allows users to input a city name to fetch and display weather data.
- **Current Weather:** Shows the current temperature, weather description, and an icon representing the weather.
- **Hourly Forecast:** Displays hourly weather forecasts for the next 24 hours.
- **Typewriter Effect:** Animates the footer text with a typewriter effect.

## How It Works

1. **Fetching Weather Data:** Enter a city name and click "Search" to retrieve and display current weather and hourly forecasts.
2. **Displaying Weather Information:** Current weather details include temperature, description, and an icon. Hourly forecasts are shown in a list format.
3. **Typewriter Effect:** Adds a dynamic typewriter animation to the footer text for visual appeal.

## File Structure

- **`index.html`**: Contains the main structure of the app, including input fields, buttons, and display areas for weather data.
- **`style.css`**: Provides the styling for the app, including layout, background, and responsive design.
- **`script.js`**: Handles the app's functionality, including fetching weather data from the OpenWeather API, updating the DOM with weather details, and implementing the typewriter effect.

## CSS Classes and Their Functions

- **`.weather-container`**: Styles the main container with a background, rounded corners, and shadow effects.
- **`#weather-icon`**: Styles the weather icon image.
- **`input[type="text"]`**: Styles the search input field with padding and border.
- **`button`**: Styles the search button with color transitions and hover effects.
- **`#hourly-forecast`**: Styles the hourly forecast section with layout and spacing.
- **`#footer-text`**: Applies the typewriter animation to the footer text.

## OpenWeather API Integration

The OpenWeather API is used to fetch weather data:
- **Current Weather API:** `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
- **Hourly Forecast API:** `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

## What I Learned

- **API Integration:** Gained experience in integrating and fetching data from APIs, specifically OpenWeather API, to display real-time data.
- **Keyframe Animations:** Improved understanding and use of keyframe animations in CSS to create smooth and engaging visual effects, such as the typewriter animation.
- **New Function Methods:** Explored different function methods in JavaScript for handling API responses and updating the DOM dynamically.
- **New CSS Attributes:** Utilized new CSS attributes and techniques to enhance the design, including advanced layout properties and responsive design features.

## Installation and Usage

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/weather-web-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather-web-app
    ```
3. Open `weather.html` in your web browser to use the app.

## Contributing

Contributions are welcome! Feel free to submit issues, fork the repository, and create pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
