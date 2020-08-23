import React from "react";
import Icon from "./Icon";

export default function HourlyForecast(props) {
  function formatHours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      return `0${hours}:00`;
    } else {
      return `${hours}:00`;
    }
  }
  function formatTemperature() {
    let temp = Math.round(props.data.main.temp);
    return `${temp}°C`;
  }
  return (
    <div className="HourlyForecast col-2">
      {formatHours()}
      <Icon className="forecast-icon" icon={props.data.weather[0].icon} />
      <strong>{formatTemperature()}</strong>
    </div>
  );
}
