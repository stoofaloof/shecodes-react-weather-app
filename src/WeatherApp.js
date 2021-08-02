import React from "react";
import Search from "./Search";
import MainHeader from "./MainHeader";
import OtherInfo from "./OtherInfo";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <Search />
      <MainHeader />
      <OtherInfo />
    </div>
  );
}
