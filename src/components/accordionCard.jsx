import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

const accordionCard = props => {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="light" eventKey={props.key}>
          {props.header}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={props.key}>
        <Card.Body> {props.content}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default accordionCard;
