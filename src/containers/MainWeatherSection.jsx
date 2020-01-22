import React, { Component } from "react";

class MainWeatherSection extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  };


  render() {
      return (
        <CurrentWeather data={defData[defData.length - 1]} sol = {sol[sol.length - 1]}/>
        )
  }}

  export default MainWeatherSection;
