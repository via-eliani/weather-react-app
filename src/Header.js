import React from "react";

import Info from "./Info";
import Weather from "./Weather";

export default function Header() {
  return (
    <div className="Header col-12">
      <div className="row">
        <Info className="col-6" />
        <Weather className="col-6" />
      </div>
    </div>
  );
}
