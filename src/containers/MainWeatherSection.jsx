import React, { Component } from "react";
import defaultData from "../data/defaultData";
import SevenDaysForecast from "./SevenDaysForecast"

const {sol_keys} = defaultData;
const defData = Object.values(defaultData).filter(i=>i.AT);

class MainWeatherSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defData: defData,
      sol: sol_keys}
  };
 
  
 componentDidMount() {}

  render() {
      const {defData, sol} = this.state;

      return ( 
      <SevenDaysForecast 
               data = {defData}
               sol = {sol}
            />
      );
  }}

  export default MainWeatherSection;
