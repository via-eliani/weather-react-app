import React from "react";

import Stats from "./Stats";

export default function Weather() {
  return (
    <div className="Weather col-6">
      <span className="temperature">24°C</span>
      <Stats />
    </div>
  );
}
