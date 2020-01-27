import React from 'react';

const Row = (props)=>{
    return (
        <tr>
            <td>{props.time}</td>
            <td className="border-right">{props.sol}</td>
            <td>{props.maxTemp}</td>
            <td>{props.avTemp}</td>
            <td className="border-right">{props.minTemp}</td>
            <td>{props.maxPre}</td>
            <td>{props.avPre}</td>
            <td>{props.minPre}</td>
        </tr>
    )
}

export default Row;