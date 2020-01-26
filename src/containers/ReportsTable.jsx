import React from 'react';
import {Table} from 'react-bootstrap';

const ReportsTable = (props)=>{
    const Months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
    const formatedTime = props.data.map(item => {
        const date = new Date(item.First_UTC);
        const month = Months[date.getUTCMonth()];
        const day = date.getUTCDate();
        const year = date.getUTCFullYear()
        return `${month} ${day}, ${year}`
    })
    console.log(formatedTime)
    return (
        <div id="reports">
            <Table responsive>
                <thead>
                        <tr>
                            <th colSpan="2">Time</th>
                            <th colSpan="3">Temperature</th>
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
                        <td>Minimun</td>
                    </tr>
                    <tr>
                        <td>{formatedTime[0]}</td>
                        <td className="border-right">{props.sol[0]}</td>
                        <td>{Math.floor(props.data[0].AT.mx)}</td>
                        <td>{Math.floor(props.data[0].AT.av)}</td>
                        <td className="border-right">{Math.floor(props.data[0].AT.mn)}</td>
                        <td>{Math.floor(props.data[0].PRE.mx)}</td>
                        <td>{Math.floor(props.data[0].PRE.av)}</td>
                        <td>{Math.floor(props.data[0].PRE.mn)}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ReportsTable;