import React from "react";

export default function Search() {
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
