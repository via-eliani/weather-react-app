import React from "react";

export default function Stats(props) {
  return (
    <div className="Stats">
      <ul className="list">
        <li>{props.data.description}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li className="text-capitalize">Wind: {props.data.wind} km/h</li>
      </ul>
    </div>
  );
}
