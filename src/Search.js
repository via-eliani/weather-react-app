import React from "react";

export default function Search() {
  function updateCity(event) {
    event.preventDefault();
  }
  function changeDisplay(event) {
    event.preventDefault();
  }
  return (
    <div className="Search col-12">
      <form onSubmit={changeDisplay} className="search-engine">
        <input
          className="search-bar"
          type="text"
          placeholder="Enter City"
          onChange={updateCity}
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
    </div>
  );
}
