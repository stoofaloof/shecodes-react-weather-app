import React from "react";
import "./OtherInfo.css";

export default function OtherInfo() {
  let weatherData = {
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temperature: "20",
    feelslike: "22",
    windspeed: "20",
    humidity: "65",
  };

  return (
    <div className="OtherInfo">
      <div className="row">
        <div className="col-6">
          <img src={weatherData.imgUrl} alt="" className="weather-image" />
          <span className="main-temp">{weatherData.temperature}</span>
          <span className="temp-unit">
            <a href="/">°C</a> | <a href="/">°F</a>
          </span>
        </div>
        <div className="col-6">
          <ul className="sideDisplay">
            <li>
              Feels Like:{" "}
              <span className="feels-like">{weatherData.feelslike}°C</span>
            </li>
            <li>
              Wind Speed:{" "}
              <span className="windspeed">{weatherData.windspeed}</span> km/h
            </li>
            <li>
              Humidity: <span className="humidity">{weatherData.humidity}</span>{" "}
              %
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
