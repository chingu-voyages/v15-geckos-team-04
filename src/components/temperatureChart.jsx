import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const temperatureChart = props => {
	const {data, dataKey} = props;
	
	return (
		<LineChart
			width={500}
			height={300}
			data={data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" name="sol" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
		</LineChart>
	);
};

export default temperatureChart;
