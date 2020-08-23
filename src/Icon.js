import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
  const iconMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "SLEET",
    "09n": "SLEET",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  if (props.className === "forecast-icon") {
    return (
      <div className="Icon">
        <ReactAnimatedWeather
          icon={iconMapping[props.icon]}
          color="gray"
          size={60}
          animate={true}
        />
      </div>
    );
  } else {
    return (
      <div className="Icon">
        <ReactAnimatedWeather
          icon={iconMapping[props.icon]}
          color="gray"
          size={100}
          animate={true}
        />
      </div>
    );
  }
}
