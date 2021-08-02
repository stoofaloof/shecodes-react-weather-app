import React from "react";
import "./MainHeader.css";

export default function MainHeader() {
  let weatherData = {
    city: "Toronto",
    country: "Canada",
    date: "Wednesday, July 21, 2021",
    time: "18:59",
    note: "Clear",
  };

  return (
    <div className="MainHeader">
      <div className="row">
        <div className="mainHeader">
          <h1 className="city-display">{weatherData.city}</h1>
          <h2 className="country-display">{weatherData.country}</h2>
          <ul className="topDisplay">
            <li className="date-display">{weatherData.date}</li>
            <li className="time-display">{weatherData.time}</li>
            <li className="note-display">{weatherData.note}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
