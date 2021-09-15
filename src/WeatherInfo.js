import React from "react";
import WeatherDate from "./WeatherDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div id="container-fluid">
        <div className="row">
          <div className="flex-column">
            <ul>
              <li>
                <WeatherDate date={props.data.date} />
              </li>
              <li className="description">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km</li>
            </ul>
          </div>
          <div className="flex-column-1">
            <strong>
              <WeatherTemperature celsius={props.data.temperature} />
            </strong>
          </div>
          <div className="flex-column-2">
            <WeatherIcon code={props.data.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}
