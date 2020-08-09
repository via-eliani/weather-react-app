import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2 days">
          Monday
          <img
            className="daily-icon"
            src="http://www.gstatic.com/images/icons/material/apps/weather/2x/cloudy_light_color_96dp.png"
            alt=""
          />
          26°/22°
        </div>
        <div className="col-2 days">
          Tuesday
          <img
            className="daily-icon"
            src="http://www.gstatic.com/images/icons/material/apps/weather/2x/strong_tstorms_light_color_96dp.png"
            alt=""
          />
          26°/22°
        </div>
        <div className="col-2 days">
          Wednesday
          <img
            className="daily-icon"
            src="http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_light_color_96dp.png"
            alt=""
          />
          26°/22°
        </div>
        <div className="col-2 days">
          Thursday{" "}
          <img
            className="daily-icon"
            src="http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_light_color_96dp.png"
            alt=""
          />
          26°/22°
        </div>
        <div className="col-2 days">
          Friday{" "}
          <img
            className="daily-icon"
            src="http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_light_color_96dp.png"
            alt=""
          />
          26°/22°
        </div>
        <div className="col-2 days">
          Saturday{" "}
          <img
            className="daily-icon"
            src="http://www.gstatic.com/images/icons/material/apps/weather/2x/cloudy_light_color_96dp.png"
            alt=""
          />
          26°/22°
        </div>
      </div>
    </div>
  );
}
