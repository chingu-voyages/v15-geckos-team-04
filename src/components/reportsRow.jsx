import React from 'react';

const Row = (props)=>{
    const formatMonth = name => name.length > 4 ? `${name.slice(0, 3)}.` : name;

    return (
        <tr>
            <td>{formatMonth(props.time.month)} {props.time.day}, {props.time.year}</td>
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