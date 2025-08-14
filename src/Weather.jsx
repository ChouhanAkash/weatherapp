import React, { useState } from "react";
import Map from "./Map";

export default function Weather({ loggedIn }) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [coords, setCoords] = useState(null);

  const WEATHER_KEY = "43ffb0d1433f4d266a08570823635b61";

  const fetchWeather = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`);
    const data = await res.json();
    console.log("API Key:", WEATHER_KEY);
console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`);

    if (data.cod === 200) {
      setWeather(data);
      setCoords(data.coord);
    } else {
      alert("City not found");
    }
  };

  const fetchForecast = async () => {
    if (!loggedIn) {
      alert("Please log in to see 5-day forecast");
      return;
    }
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_KEY}&units=metric`);
    const data = await res.json();
    setForecast(data);
  };

  return (
    <div className="weather-section">
      <div className="search-box">
        <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
        <button onClick={fetchWeather}>Get Weather</button>
        <button onClick={fetchForecast}>Get 5-Day Forecast</button>
      </div>

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>Temp: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}

      {coords && <Map lat={coords.lat} lng={coords.lon} />}

      {forecast && (
        <div className="forecast">
          <h3>5-Day Forecast</h3>
          <ul>
            {forecast.list.slice(0, 5).map((f, i) => (
              <li key={i}>
                {f.dt_txt} - {f.main.temp}°C - {f.weather[0].description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
