import React from 'react';

const Row = props => {
    const formatMonth = name => (name.length > 4 ? `${name.slice(0, 3)}.` : name);
    const {time, sol, maxTemp, minTemp, avTemp, maxPre, avPre, minPre} = props;
	
	return (
		<tr>
			<td>
				{formatMonth(time.month)} {time.day}, {time.year}
			</td>
			<td className="border-right">{sol}</td>
			<td>{maxTemp}</td>
			<td>{avTemp}</td>
			<td className="border-right">{minTemp}</td>
			<td>{maxPre}</td>
			<td>{avPre}</td>
			<td>{minPre}</td>
		</tr>
	);
};

export default Row;
