import React from "react";
import ScaleButton from "../components/scaleButton";
import ForecastTable from "../components/dayForecastTable";
import { Row } from "react-bootstrap";

function WeatherForecast(props) {
  return (
    <div>
      <h3>
        <Row>
          7- days Weather Forecast,
          <ScaleButton />
        </Row>
      </h3>
      <Row>
                {props.sols.map(item => (
          <ForecastTable key={item} sol={item} />
        ))}
      </Row>
    </div>
  );
}

export default WeatherForecast;