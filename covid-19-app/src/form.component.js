import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <div className="container-weather">
      <form className="weather-form" onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
          <div className="city-country-div">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="city-country-div">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
          <div>
            <button className="weather-btn">Get Weather</button>
          </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;