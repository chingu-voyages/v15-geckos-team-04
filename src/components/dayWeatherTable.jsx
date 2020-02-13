import React from 'react';
import { Table } from 'react-bootstrap';

const dayWeatherTable = props => {

	const {sol, earthDate, minTemperature, maxTemperature} = props;

	return (
		<Table vartiant="dark" className="col-md m-4 text-center" key={sol}>
			<thead>
				<tr>
					<th colSpan="2"> {earthDate} </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>MIN</td>
					<td>{minTemperature}</td>
				</tr>
				<tr>
					<td>MAX</td>
					<td>{maxTemperature}</td>
				</tr>
				<tr>
					<td colSpan="2"> Sol {sol}</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default dayWeatherTable;
