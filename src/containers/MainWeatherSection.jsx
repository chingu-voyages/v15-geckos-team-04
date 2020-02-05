import React, { Component } from "react";
import defaultData from "../data/defaultData";
import CurrentWeather from './CurrentWeather';
import SevenDaysForecast from "./SevenDaysForecast";
import Button from '../components/scaleButton'

const {sol_keys} = defaultData;
const defData = Object.values(defaultData).filter(i=>i.AT);

class MainWeatherSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defData: defData,
      sol: sol_keys,
      isCelsius: true 
    }
  };
 
  handleClick = () => {
    console.log('holi')
    this.setState({
        isCelsius: !this.state.isCelsius,
        defData: this.state.isCelsius ? this.turnCtoF() : this.turnFtoC()
    })
  }

  turnCtoF = () => {
    const data = [...this.state.defData]
    data.forEach(sol => {
      for(let key in sol){
        if(key === 'AT'){
          for(let temp in sol[key]){
           sol[key][temp] = sol[key][temp] * 9 / 5 + 32;
          }
        }
      }
    })
    console.log('conversion celsius to fahrenheit:', data)
    return data;
  }

  turnFtoC = () => {
    const data = [...this.state.defData]
    data.forEach(sol => {
      for(let key in sol){
        if(key === 'AT'){
          for(let temp in sol[key]){
           sol[key][temp] = (sol[key][temp] - 32) * 5 / 9;
          }
        }
      }
    })
    console.log('conversion fahrenheit to celsius:', data)
    return data;
  }

  render() {
      const {defData, sol} = this.state;
      console.log(this.state.defData[0].AT)

      return ( 
        <div>
          <Button scale={this.state.isCelsius} onClick={this.handleClick}/>
          <CurrentWeather data={defData[defData.length - 1]} sol = {sol[sol.length - 1]}/>
          <SevenDaysForecast data = {defData} sol = {sol} />
        </div>  
      );
  }}

  export default MainWeatherSection;
