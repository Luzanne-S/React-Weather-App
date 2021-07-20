import React from "react";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Johannesburg",
    temperature: 13,
    date: "Friday 17:56",
    description: "Light Showers",
    humidity: "3%",
    wind: "10km",
    imgUrl: " http://openweathermap.org/img/wn/10d@2x.png",
  };

  return (
    <div className="Weather">
      <div className="card">
        <form className="form-inline my-2 my-lg-0 searchBar">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search city"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-secondary my-2 my-sm-0"
            type="submit"
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
        <h1>{weatherData.city}</h1>
        <div className="container2">
          <div className="row">
            <div className="col">
              <ul>
                <li className="date">{weatherData.date}</li>
                <li className="description">{weatherData.description}</li>
                <li>Humidity: {weatherData.humidity}</li>
                <li>Wind: {weatherData.wind}</li>
              </ul>
            </div>
            <div className="col1">
              <p className="temperature" />
              <strong>{weatherData.temperature}</strong>
              <span className="units">°C | °F</span>{" "}
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
