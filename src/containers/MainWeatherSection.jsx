import React, { Component } from "react";
import defaultData from "../data/defaultData";
import SevenDaysForecast from "./SevenDaysForecast"


const {sol_keys} = defaultData;


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
    this.setState ({
      sol: sol_keys,
      
    })

  }

  render() {
    const {sol} = this.state;
    
      return (<div > 
      <SevenDaysForecast sols = {sol}/>
      </div>);
  }}

  export default MainWeatherSection;
