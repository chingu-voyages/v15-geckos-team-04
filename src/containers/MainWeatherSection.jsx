
import React, { Component } from "react";
import defaultData from "../assets/defaultData";
import LatestWeather from "./LatestWeather";
import SixDaysWeather from "./SixDaysWeather";
import LoadingSpinner from "../components/loadingSpinner";
import ReportsChart from "../containers/ReportsChart";
import ReportsTable from './ReportsTable'


const { sol_keys } = defaultData;
const defData = Object.values(defaultData).filter(i => i.AT);

class MainWeatherSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defData: defData,
      sol: sol_keys,
      isLoaded: false,
      error: null,
      isCelsius: true
    }
  };
 
  handleClick = () => {
    this.setState({
        isCelsius: !this.state.isCelsius,
        defData: this.convertTemp()
    })
  }
        
  convertTemp = () => {
    const data = [...this.state.defData]
    data.forEach(sol => {
      for(let key in sol){
        if(key === 'AT'){
          for(let temp in sol[key]){
            this.state.isCelsius ? sol[key][temp] = sol[key][temp] * 9 / 5 + 32 : sol[key][temp] = (sol[key][temp] - 32) * 5 / 9;
          }
        }
      }
    })
    return data;
  }
        
 componentDidMount() {
   fetch(
    process.env.REACT_APP_INSIGHT_MARS_WEATHER_API
)
  .then(response => response.json())
  .then(
    result => {
      this.setState({
        isLoaded: true,
        apiData: Object.values(result).filter(i=>i.AT),
        apiSol: result.sol_keys
      });
      console.log(this.state);
    },
    error => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  );
 }

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
    const { defData, sol, error, isLoaded, apiData, apiSol, isCelsius } = this.state;


      if (error) {
        return (
        <div> Error: {error.message}
          <LatestWeather data={defData[defData.length - 1]} sol = {sol[sol.length - 1]} scale={isCelsius} onClick={this.handleClick}/>
          <SixDaysWeather data = {defData} sol = {sol} scale={isCelsius} onClick={this.handleClick}/>
        </div>)
      } else if (!isLoaded) {
        return <LoadingSpinner />;
      } else {
      return ( 
        <div>
    
          <LatestWeather data={apiData[apiData.length - 1]} sol = {apiSol[apiSol.length - 1]} scale={this.state.isCelsius} onClick={this.handleClick} getDate={this.formatDate}/>
          <SixDaysWeather data = {apiData} sol = {apiSol} scale={isCelsius} onClick={this.handleClick}/>
          <ReportsChart data={apiData} minTemp="AT.mn" maxTemp= "AT.mx" />
          <ReportsTable data={apiData} sol={apiSol} scale={isCelsius} onClick={this.handleClick} getDate={this.formatDate}/>

        </div>
      );
  }
 }

}

export default MainWeatherSection;
