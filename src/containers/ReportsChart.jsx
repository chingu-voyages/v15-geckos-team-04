import React, { PureComponent } from "react";
import TemperatureChart from "../components/temperatureChart";
import {Row} from "react-bootstrap";


function ReportsChart(props) {
  const data = props.data;
  const sol = props.sol;
  return (
    <Row>
      <TemperatureChart data= {data} sol ={sol}/>
      <TemperatureChart data = {data} sol ={sol}/>
    </Row>
  );
}

export default ReportsChart;
