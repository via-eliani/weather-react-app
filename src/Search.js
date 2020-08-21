import React from "react";
import axios from "axios";

export default function Search() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let city = "Tokyo";
  const apiKey = "dbaad797d5c662462ef49eed940356b1";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Search col-12">
      <form className="search-engine">
        <input
          className="search-bar"
          type="text"
          placeholder="Enter City"
          autoFocus="on"
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
    </div>
  );
}
