import React from 'react';
import { Table } from 'react-bootstrap';

const dayWeatherTable = props => {
	return (
		<Table vartiant="dark" className="col-md m-4 text-center" key={props.sol}>
			<thead>
				<tr>
					<th colSpan="2"> {props.earthDate} </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>MIN</td>
					<td>{props.minTemperature}</td>
				</tr>
				<tr>
					<td>MAX</td>
					<td>{props.maxTemperature}</td>
				</tr>
				<tr>
					<td colSpan="2"> Sol {props.sol}</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default dayWeatherTable;
