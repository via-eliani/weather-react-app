import React from "react";

export default function Stats(props) {
  let wind = props.data.wind;
  if (props.unit === "metric") {
    return (
      <div className="Stats">
        <ul className="list">
          <li className="text-capitalize">{props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {wind} kmph</li>
        </ul>
      </div>
    );
  } else {
    let imperialWind = Math.round(wind * 1.60934);
    return (
      <div className="Stats">
        <ul className="list">
          <li className="text-capitalize">{props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {imperialWind} mph</li>
        </ul>
      </div>
    );
  }
}
