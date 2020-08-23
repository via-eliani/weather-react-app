import React, { useState } from "react";

import axios from "axios";
import HourlyForecast from "./HourlyForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function getForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast flexbox-container">
        <HourlyForecast className="hours" data={forecast.list[0]} />
        <HourlyForecast className="hours" data={forecast.list[1]} />
        <HourlyForecast className="hours" data={forecast.list[2]} />
        <HourlyForecast className="hours" data={forecast.list[3]} />
        <HourlyForecast className="hours" data={forecast.list[4]} />
        <HourlyForecast className="hours" data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "f655251e7aa74c3031f8eb126912bec6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getForecast);
    return "loading...";
  }
}
