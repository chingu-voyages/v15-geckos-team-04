import React, { Component } from "react";
import defaultData from "../data/defaultData";
import ScaleButton from "../components/scaleButton"

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
    
      return (<div className="text-center"> Main Weather Section 
      <ScaleButton /></div>);
  }}

  export default MainWeatherSection;
