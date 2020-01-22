import React from 'react';
import Navbar from './Navbar';
import Button from '../components/scaleButton'

const CurrentWeather = (props) =>{
  const Months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date(props.data.First_UTC);
  const month = Months[date.getUTCMonth()];
  const day = date.getUTCDate();

  return(
    <div className="mars-bg">
      <Navbar />
      <div className="current">
        <div className="current-data">
          <h3>Sol {props.sol}</h3>
          <p>{month} {day}</p>
        </div>
        <div>
          <p>High: {Math.floor(props.data.AT.mx)}° <Button/></p>
          <p>Low: {Math.floor(props.data.AT.mn)} ° <Button/></p>
          <p>Pressure: {Math.floor(props.data.PRE.av)} Pa</p>
        </div>
      </div>
    </div>
    )
}

export default CurrentWeather;  