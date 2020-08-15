import React from "react";
import "./App.css";
import Header from "./Header";
import Icon from "./Icon";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Icon />
        <Search />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
