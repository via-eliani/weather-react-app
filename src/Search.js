import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-engine">
        <input className="search-bar" type="text" placeholder="Enter City" />
        <input className="search-button" type="submit" value="Search" />
      </form>
    </div>
  );
}
