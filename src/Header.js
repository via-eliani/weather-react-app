import React from "react";

import Info from "./Info";
import Weather from "./Weather";

export default function Header() {
  return (
    <div className="Header">
      <div className="row">
        <Info />
        <Weather />
      </div>
    </div>
  );
}
