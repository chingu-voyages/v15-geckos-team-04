import React, { Component } from "react";
import defaultData from "../data/defaultData";
import SevenDaysForecast from "./SevenDaysForecast"


const {sol_keys} = defaultData;
const solData = Object.values(defaultData).filter(i=> i.AT);

class MainWeatherSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sol: [],
      temperature: [],
      windSpeed: [],
      pressure: [],
      season: ""
     }
  };
 
  
  componentDidMount() {
    
    const temperature = solData.map(i=>i.AT);
    const pressure = solData.map(i=>i.PRE.av);
    const windSpeed = solData.map(i=> i.HWS.av);
    const season = solData.map(i=>i.Season);
    
    this.setState ({
      sol: sol_keys,
      temperature: temperature,
      pressure: pressure,
      windSpeed: windSpeed,
      season: season
      });

      
  }

  render() {
    const {sol} = this.state;
    
      return (<div > 
      <SevenDaysForecast sols = {sol}/>
      </div>);
  }}

  export default MainWeatherSection;
