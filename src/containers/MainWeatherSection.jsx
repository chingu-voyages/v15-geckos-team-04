import React, { Component } from "react";
import defaultData from "../data/defaultData";
import CurrentWeather from "./CurrentWeather";
import SevenDaysForecast from "./SevenDaysForecast";
import LoadingSpinner from "../components/loadingSpinner";
import ReportsChart from "../containers/ReportsChart";

const { sol_keys } = defaultData;
const defData = Object.values(defaultData).filter(i => i.AT);

class MainWeatherSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defData: defData,
      sol: sol_keys,
      isLoaded: false,
      error: null
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_INSIGHT_MARS_WEATHER_API)
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            apiData: Object.values(result).filter(i => i.AT),
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

  render() {
    const { defData, sol, error, isLoaded, apiData, apiSol } = this.state;

    if (error) {
      return (
        <div>
          {" "}
          Error: {error.message}
          <CurrentWeather
            data={defData[defData.length - 1]}
            sol={sol[sol.length - 1]}
          />
          <SevenDaysForecast data={defData} sol={sol} />
        </div>
      );
    } else if (!isLoaded) {
      return <LoadingSpinner />;
    } else {
      return (
        <div>
          <CurrentWeather
            data={apiData[apiData.length - 1]}
            sol={apiSol[apiSol.length - 1]}
          />
          <SevenDaysForecast data={apiData} sol={apiSol} />
          <ReportsChart data={apiData} minTemp="AT.mn" maxTemp= "AT.mx" />
        </div>
      );
    }
  }
}

export default MainWeatherSection;
