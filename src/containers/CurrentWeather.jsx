import React from 'react';
// import MarsImage from '../img/Mars-bg.jpg';

const CurrentWeather = (props) =>{
  const Months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date(props.data.First_UTC);
  const month = Months[date.getUTCMonth()];
  const day = date.getUTCDate();

  return(
    <div>
      <h3>Sol {props.sol}</h3>
      <p>{month} {day}</p>
      <p>High: {Math.floor(props.data.AT.mx)} °C</p>
      <p>Low: {Math.floor(props.data.AT.mn)} °C</p>
      <p>Pressure: {Math.floor(props.data.PRE.av)} Pa</p>
    </div>
    )
}

export default CurrentWeather;  