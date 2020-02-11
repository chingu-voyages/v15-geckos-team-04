import React from 'react';
import { Table } from 'react-bootstrap';
import Row from '../components/reportsRow';
import Button from '../components/scaleButton';

const ReportsTable = props => {
	const formatedTime = [ ...props.data ].reverse().map(item => {
		return props.getDate(item.First_UTC);
	});
	const sol = [ ...props.sol ].reverse();
	const tableRows = [ ...props.data ].reverse().map((item, index) => {
		return (
			<Row
				key={sol[index]}
				time={formatedTime[index]}
				sol={sol[index]}
				maxTemp={Math.floor(item.AT.mx)}
				avTemp={Math.floor(item.AT.av)}
				minTemp={Math.floor(item.AT.mn)}
				maxPre={Math.floor(item.PRE.mx)}
				avPre={Math.floor(item.PRE.av)}
				minPre={Math.floor(item.PRE.mn)}
			/>
		);
	});

	return (
		<div id="reports">
			<Table responsive>
				<thead>
					<tr>
						<th colSpan="2">Time</th>
						<th colSpan="3">
							Temperature <Button variant="outline-dark" onClick={props.onClick} scale={props.scale} />
						</th>
						<th colSpan="3">Pressure (Pa)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Date</td>
						<td className="border-right">Sol</td>
						<td>Maximum</td>
						<td>Average</td>
						<td className="border-right">Minimun</td>
						<td>Maximum</td>
						<td>Average</td>
						<td>Minimum</td>
					</tr>
					{tableRows}
				</tbody>
			</Table>
		</div>
	);
};

export default ReportsTable;
