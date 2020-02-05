import React from "react";
import { Button } from "react-bootstrap";

const scaleButton = (props)=>{
  return (
    <Button onClick={props.onClick} >
      {props.scale ? '°C' : '°F'}
    </Button>
  );
}

export default scaleButton;