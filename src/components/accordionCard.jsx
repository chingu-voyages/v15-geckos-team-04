import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

const accordionCard = props => {

  const {key, header, content} = props;

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="light" eventKey={key}>
          {header}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={key}>
        <Card.Body> {content}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default accordionCard;
