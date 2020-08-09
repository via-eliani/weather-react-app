import React from "react";
import "./App.css";
import Header from "./Header";
import Icon from "./Icon";
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <Header />
      <Icon />
      <Search />
      <Forecast />
    </div>
  );
}

export default App;
