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

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row">
        <div className="Forecast flexbox-container">
          <HourlyForecast className="hours col-2" data={forecast.list[0]} />
          <HourlyForecast className="hours col-2" data={forecast.list[1]} />
          <HourlyForecast className="hours col-2" data={forecast.list[2]} />
          <HourlyForecast className="hours col-2" data={forecast.list[3]} />
          <HourlyForecast className="hours col-2" data={forecast.list[4]} />
          <HourlyForecast className="hours col-2" data={forecast.list[5]} />
        </div>
      </div>
    );
  } else {
    console.log(props.city);
    let apiKey = "f655251e7aa74c3031f8eb126912bec6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getForecast);
    return "loading...";
  }
}
