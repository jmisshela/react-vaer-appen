import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <WeatherTemperature celsius={Math.round(props.data.temperature)} />
          </div>
        </div>
        <div className="col-5 iconBlock">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={125} />
          </div>

          <br />
          <ul className="humidity-and-wind">
            <li>Humidity: {props.data.humidity} km/h</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
