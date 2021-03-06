import React from "react";

import Info from "./Info";
import Weather from "./Weather";

export default function Header(props) {
  return (
    <div className="Header">
      <div className="row">
        <Info city={props.data.city} date={props.data.date} />
        <Weather data={props.data} />
      </div>
    </div>
  );
}
