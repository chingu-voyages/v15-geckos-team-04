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
          7- days Weather Forecast,
          <ScaleButton variant="outline-dark" onClick={props.onClick} scale={props.scale}/>
        </Row>
      </h3>
      <Row>
      {props.data.map((item, i) => (
          <ForecastTable 
            earthDate = {item.First_UTC.substring(0,10)}
            minTemperature ={Math.floor(item.AT.mn)}
            maxTemperature ={Math.floor(item.AT.mx)}
            sol= {sol[i]}       
           />
        ))}  
      </Row>
    </div>
  );
}

export default WeatherForecast;