import React from "react";
import { Card, Accordion } from "react-bootstrap";

const accordionCard = props => {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="light" eventKey="0">
          {props.header}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body> {props.content}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default accordionCard;
