import React from 'react';
import TemperatureChart from '../components/temperatureChart';
import { Row } from 'react-bootstrap';

const ReportsChart = props => {
	const data = props.data;
	const minTemp = props.minTemp;
	const maxTemp = props.maxTemp;

	return (
		<Row>
			<TemperatureChart data={data} dataKey={minTemp} id="minTempChart" />
			<TemperatureChart data={data} dataKey={maxTemp} id="maxTempChart" />
		</Row>
	);
};

export default ReportsChart;
