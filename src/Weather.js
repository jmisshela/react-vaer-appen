import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city..." />
        <input type="submit" value="Search" />
      </form>
      <h1>Oslo</h1>
      {/*
      <p>
        Tuesday 9:15, broken clouds
        <br />
        Humidity: 60%, Wind: 2.03km/h
      </p>
  */}
    </div>
  );
}
