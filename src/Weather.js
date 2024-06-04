import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-7">
          <h1>Oslo</h1>
          <ul>
            <li>Tuesday 9:15</li>
            <li>Broken Clouds</li>
          </ul>
          <div className="temperature-container">
            <div className="temperature">23</div>
            <div className="units">°C | °F</div>
          </div>
        </div>
        <div className="col-5 iconBlock">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
            alt="broken-clouds"
          />
          <br />
          <ul>
            <li>Humidity: 4km/h</li>
            <li>Wind: 4 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
