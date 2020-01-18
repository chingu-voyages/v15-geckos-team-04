import React, { Component } from "react";
import defaultData from "../data/defaultData";

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
      
      </div>);
  }}

  export default MainWeatherSection;
