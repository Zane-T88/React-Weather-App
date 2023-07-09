import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const fetchData = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
            .then(response => {
                setWeather(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    };

    return (
        <div>
        <h1>Weather Forecaster</h1>
        <div className="weather-container">
            <input 
                type="text" 
                className="city-input"
                placeholder="Enter city" 
                onChange={(e) => setCity(e.target.value)} 
            />
            {weather && (
                <div className="weather-data">
                    <h3 className="city-name">{weather.name}</h3>
                    <h4>{weather.weather[0].main}</h4>
                    <h4 className="temperature">{weather.main.temp} °C</h4>
                </div>
            )}
            <button className="search-button" onClick={fetchData}>Search</button>
        </div>
        </div>
    );
}

export default Weather;
