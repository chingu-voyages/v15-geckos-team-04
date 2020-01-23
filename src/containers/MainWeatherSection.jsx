import React, { Component } from "react";
import defaultData from "../data/defaultData";
import CurrentWeather from './CurrentWeather'
import SevenDaysForecast from "./SevenDaysForecast"

const {sol_keys} = defaultData;
const defData = Object.values(defaultData).filter(i=>i.AT);
const key = "4eyqnsnfMzgXvo5el4jgj6pKMB9YaJVyiVTssCge";

class MainWeatherSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defData: defData,
      sol: sol_keys,
      isLoaded: false,
      error: null}
  };
 
  
 componentDidMount() {
   fetch(
  "https://api.nasa.gov/insight_weather/?api_key=4eyqnsnfMzgXvo5el4jgj6pKMB9YaJVyiVTssCge&feedtype=json&ver=1.0"
)
  .then(response => response.json())
  .then(
    result => {
      this.setState({
        isLoaded: true,
        defData: Object.values(result).filter(i=>i.AT),
        sol: result.sol_keys
      });
      console.log(this.state);
    },
    error => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  );}

  render() {
      const {defData, sol} = this.state;

      return ( 
        <div>
          <CurrentWeather data={defData[defData.length - 1]} sol = {sol[sol.length - 1]}/>
          <SevenDaysForecast data = {defData} sol = {sol} />
        </div>
      );
  }}

  export default MainWeatherSection;
