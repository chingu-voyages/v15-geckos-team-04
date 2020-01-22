import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function scaleButton() {
  return (
    <ButtonGroup>
      <Button variant="link">C</Button>
      <Button variant="link">F</Button>
    </ButtonGroup>
  );
}

export default scaleButton;