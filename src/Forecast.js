import React, { useState } from "react";
import Icon from "./Icon";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function getForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        10:00
        <Icon
          className="forecast-icon"
          icon={forecast.list[0].weather[0].icon}
        />
        <strong>{Math.round(forecast.list[0].main.temp)}°C</strong>
      </div>
    );
  } else {
    let apiKey = "f655251e7aa74c3031f8eb126912bec6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getForecast);
    return "loading...";
  }
}
