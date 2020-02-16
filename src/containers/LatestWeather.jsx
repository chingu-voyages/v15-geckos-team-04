import React from 'react';
import Button from '../components/scaleButton';

const LatestWeather = props => {
    const {error, sol, data, getDate, onClick, scale} = props;
    	
	return (
		<div id="latest-weather" className="mars-bg">
			<p className="error-msg">{error ? 'Error occurred: default data currently displayed' : ''}</p>
			<div className="latest">		
				<div className="latest-data">
					<h3>Sol {sol}</h3>
					<p className="text-center">
						{getDate(data.First_UTC).month} {getDate(data.First_UTC).day}
					</p>
				</div>
				<div>
					<p>
						High: {Math.floor(data.AT.mx)}{' '}
						<Button variant="outline-light" onClick={onClick} scale={scale} />
					</p>
					<p>
						Low: {Math.floor(props.data.AT.mn)}{' '}
						<Button variant="outline-light" onClick={onClick} scale={scale} />
					</p>
					<p>Pressure: {Math.floor(data.PRE.av)} Pa</p>
				</div>
			</div>
		</div>
	);
};

export default LatestWeather;
