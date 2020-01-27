import React, { Component } from "react";
import defaultData from "../data/defaultData";
import CurrentWeather from './CurrentWeather'
import SevenDaysForecast from "./SevenDaysForecast"
import ReportsTable from './ReportsTable'

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
        <div>
          <CurrentWeather data={defData[defData.length - 1]} sol = {sol[sol.length - 1]}/>
          <SevenDaysForecast data = {defData} sol = {sol} />
          <ReportsTable data={apiData} sol={apiSol} />
        </div>
      );
  }}

  export default MainWeatherSection;
