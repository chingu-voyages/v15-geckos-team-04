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

  formatDate = (date) => {
    const Months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    const dateStr = new Date(date);
    const month = Months[dateStr.getUTCMonth()];
    const day = dateStr.getUTCDate();
    const year = dateStr.getUTCFullYear();
    return {month, day, year}
  }
  
  render() {
      const {defData, sol} = this.state;

      return ( 
        <div>
          <CurrentWeather data={defData[defData.length - 1]} sol = {sol[sol.length - 1]} getDate={this.formatDate}/>
          <SevenDaysForecast data = {defData} sol = {sol} />
          <ReportsTable data={defData} sol={sol} scale={this.state.isCelsius} onClick={this.handleClick} getDate={this.formatDate}/>
        </div>
      );
  }}

  export default MainWeatherSection;
