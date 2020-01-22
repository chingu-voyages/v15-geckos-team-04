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
      return (
        )
      const {defData, sol} = this.state;

      return ( 
        <div>
          <CurrentWeather data={defData[defData.length - 1]} sol = {sol[sol.length - 1]}/>
          <SevenDaysForecast data = {defData} sol = {sol} />
        <div/>
      );
  }}

  export default MainWeatherSection;
