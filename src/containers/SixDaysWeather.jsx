import React from "react";
import ScaleButton from "../components/scaleButton";
import DayTable from "../components/dayWeatherTable";
import { Row } from "react-bootstrap";

const SixDaysWeather = (props) => {

  const sol = props.sol;
      
  return (
    <div id="six-days-weather">
      <h3>
        <Row>
          Last 6 Days Weather,
          <ScaleButton variant="outline-dark" onClick={props.onClick} scale={props.scale}/>
        </Row>
      </h3>
      <Row >
      {props.data.map((item, i) => (
          <DayTable 
            earthDate = {item.First_UTC.substring(0,10)}
            minTemperature ={Math.floor(item.AT.mn)}
            maxTemperature ={Math.floor(item.AT.mx)}
            sol= {sol[i]}       
           />
        )).slice(0,6)}  
      </Row>
    </div>
  );
}

export default SixDaysWeather;