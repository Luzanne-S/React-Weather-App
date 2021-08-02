import React from "react";
import WeatherDate from "./WeatherDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="container2">
        <div className="row">
          <div className="col">
            <ul>
              <li>
                <WeatherDate date={props.data.date} />
              </li>
              <li className="description">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km</li>
            </ul>
          </div>
          <div className="col1">
            <strong>
              <WeatherTemperature celsius={props.data.temperature} />
            </strong>

            <span className="TemperatureIcon">
              <WeatherIcon code={props.data.icon} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
