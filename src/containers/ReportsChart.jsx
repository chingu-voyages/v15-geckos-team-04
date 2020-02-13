import React from 'react';
import TemperatureChart from '../components/temperatureChart';
import { Row } from 'react-bootstrap';

const ReportsChart = props => {
	const {data, minTemp, maxTemp} = props;
	
	return (
		<React.Fragment>
			<h3 className="text-center"> Temperature Charts</h3>
		    <Row className="justify-content-center">
			  <TemperatureChart data={data} dataKey={minTemp} id="minTempChart" />
			  <TemperatureChart data={data} dataKey={maxTemp} id="maxTempChart" />
		    </Row>
		</React.Fragment>
	);
};

export default ReportsChart;
