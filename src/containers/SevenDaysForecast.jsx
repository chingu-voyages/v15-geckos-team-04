import React from "react";
import ScaleButton from "../components/scaleButton";
import ForecastTable from "../components/dayForecastTable";
import { Row } from "react-bootstrap";

function WeatherForecast(props) {

  const sol = props.sol;
      
  return (
    <div>
      <h3>
        <Row>
          Previous Days Weather,
          <ScaleButton />
        </Row>
      </h3>
      <Row>
      {props.data.map((item, i) => (
          <ForecastTable 
            earthDate = {item.First_UTC.substring(0,10)}
            minTemperature ={Math.round(item.AT.mn)}
            maxTemperature ={Math.round(item.AT.mx)}
            sol= {sol[i]}       
           />
        )).slice(0,6)}  
      </Row>
    </div>
  );
}

export default WeatherForecast;