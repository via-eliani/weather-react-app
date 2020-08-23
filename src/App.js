import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Icon from "./Icon";
import axios from "axios";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Tokyo");
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
    });
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function changeDisplay(event) {
    event.preventDefault();
    gatherData();
  }

  function gatherData() {
    const apiKey = "f655251e7aa74c3031f8eb126912bec6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <Header data={weatherData} />
          <Icon icon={weatherData.icon} />
          <div className="Search col-12">
            <form className="search-engine" onSubmit={changeDisplay}>
              <input
                className="search-bar"
                type="text"
                placeholder="Enter City"
                autoFocus="on"
                onChange={updateCity}
              />
              <input className="search-button" type="submit" value="Search" />
            </form>
          </div>
          <Forecast city={weatherData.city} />
          <Footer />
        </div>
      </div>
    );
  } else {
    gatherData();
    return "Loading...";
  }
}
