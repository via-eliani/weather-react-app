import React, { useState } from "react";

import Stats from "./Stats";

export default function Weather(props) {
  const [unit, setUnit] = useState("metric");
  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <div className="Weather col-6">
        <span className="temperature">
          {props.data.temperature}
          <sup className="unit">
            °C|
            <a href="/" onClick={showImperial}>
              °F
            </a>
          </sup>
        </span>
        <Stats data={props.data} unit="metric" />
      </div>
    );
  } else {
    let imperialTemp = Math.round((props.data.temperature * 9) / 5 + 32);
    return (
      <div className="Weather col-6">
        <span className="temperature">
          {imperialTemp}
          <sup className="unit">
            <a href="/" onClick={showMetric}>
              °C
            </a>
            |°F
          </sup>
        </span>
        <Stats data={props.data} unit="imperial" />
      </div>
    );
  }
}
