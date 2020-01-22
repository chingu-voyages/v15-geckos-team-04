import React from "react";
import { Table } from "react-bootstrap";

function dayForecastTable(props) {
  return (
    <Table className="col-md-1 m-2" key={props.sol}>
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
          <td colSpan="2">Sol {props.sol}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default dayForecastTable;