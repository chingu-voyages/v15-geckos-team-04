import React from 'react';
import TemperatureChart from '../components/temperatureChart';
import { Row } from 'react-bootstrap';

const ReportsChart = props => {
	const data = props.data;
	const minTemp = props.minTemp;
	const maxTemp = props.maxTemp;

	return (
		<React.Fragment>
			<h3 className="text-center mt-4">Temperature Chart</h3>
		   <Row className="justify-content-center mt-4 mb-4">
			   <TemperatureChart data={formatedData} dataKey="minimum" id="minTempChart" />
			   <TemperatureChart data={formatedData} dataKey="maximum" id="maxTempChart" />
		   </Row>
		</React.Fragment>
	);
};

export default ReportsChart;
