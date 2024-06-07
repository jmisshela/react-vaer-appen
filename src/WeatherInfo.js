import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="temperature-container">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units">°C | °F</span>
          </div>
        </div>
        <div className="col-5 iconBlock">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            width="170"
          />
          <br />
          <ul>
            <li>Humidity: {props.data.humidity} km/h</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
