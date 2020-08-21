import React from "react";
import axios from "axios";

export default function Icon(props) {
  return (
    <div className="Icon">
      <img
        className="main-icon"
        src={props.data.iconUrl}
        alt={props.data.description}
      />
    </div>
  );
}
