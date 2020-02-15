import React from 'react';
import Button from '../components/scaleButton';

const LatestWeather = props => {
	return (
		<div id="latest-weather" className="mars-bg">
			<p className="error-msg">{props.error ? 'Error occurred: default data currently displayed' : ''}</p>
			<div className="latest">		
				<div className="latest-data">
					<h3>Sol {props.sol}</h3>
					<p className="text-center">
						{props.getDate(props.data.First_UTC).month} {props.getDate(props.data.First_UTC).day}
					</p>
				</div>
				<div>
					<p>
						High: {Math.floor(props.data.AT.mx)}{' '}
						<Button variant="outline-light" onClick={props.onClick} scale={props.scale} />
					</p>
					<p>
						Low: {Math.floor(props.data.AT.mn)}{' '}
						<Button variant="outline-light" onClick={props.onClick} scale={props.scale} />
					</p>
					<p>Pressure: {Math.floor(props.data.PRE.av)} Pa</p>
				</div>
			</div>
		</div>
	);
};

export default LatestWeather;
