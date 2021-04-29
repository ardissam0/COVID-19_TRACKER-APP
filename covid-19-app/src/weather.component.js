import React from "react";
import "./weather.style.css";

const Weather = props => {
  return (
    <div className="container-weather">
      <div className="Card1">
        <h1 className="city-name__weather">{props.cityname}</h1>
        <h5 className="weather-icon">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>

        {/* Get Fahrenheit */}
        {props.temp_fahrenheit ? (
          <h1 className="display-degrees">{props.temp_fahrenheit}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <h4 className="weather-description">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3 className="temp__low-high">
        <span className="temp__low">Low: {min}&deg;</span>
        <span className="temp__high">High: {max}&deg;</span>
      </h3>
    );
  }
}