import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


  const renderCustomAxisTick = ({ x, y, payload }) => {
    let path = [200, 300, 400, 500, 600, 700];
    return (
      path
    );};

    function temperatureChart(props) {
        const data = props.data;
        const sol = props.sol;
       
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
      <XAxis tick={'100', '200','100'}/>
      <YAxis />
      <Tooltip />
      <Legend />
      
      <Line type="monotone" dataKey="AT.mx" stroke="#82ca9d" />
    </LineChart>
  );
}

export default temperatureChart;