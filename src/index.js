import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./WeatherApp";
import Footer from "./Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="appWrapper">
          <div className="mainBody">
            <WeatherApp />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
