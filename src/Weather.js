import React from "react";

import Stats from "./Stats";

export default function Weather(props) {
  return (
    <div className="Weather col-6">
      <span className="temperature">{props.data.temperature}°C</span>
      <Stats data={props.data} />
    </div>
  );
}
