import React from "react";

export default function Time(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="Time">
      Updated: {""}
      {day} {hour}:{minutes}
    </div>
  );
}
