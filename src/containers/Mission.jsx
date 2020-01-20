//React Bootstrap style sheet

// <link
//   rel="stylesheet"
//   href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//   integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//   crossorigin="anonymous"
// />

import React from 'react';
import {Container, Row, Col, Accordion, Card, Button} from 'react-bootstrap';

function Mission() {
  return (
    <Container className = 'mission_wrapper' style = { { 
      backgroundImage: "url('https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80')" ,
      backgroundSize: 'cover',
    } }> 
    <Row style = {{
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
      <Col md = {12} lg = {6}>
        <div className = 'mission_video' 
        style = {{
          width: '100%',
          height: '56.25%',
        }}
        >
        <iframe src = 'https://youtube.com/embed/LKLITDmm4NA' 
        style = {{
          display: 'block',
          height: '100%',
          width: '100%'
        }}
        />
        </div>
      </Col>

      <Col md = {12} lg = {6}>
      <div className = 'mission_information'>
        <Accordion defaultActiveKey = '0'>
        <Card>
          <Card.Header>
            <Accordion.Toggle as = {Button} variant='link' eventKey = '0'>
              Insight mission
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey = '0'>
            <Card.Body>
              The main purpose of the Insight mission is to get more knowledge about the composition of Mars.
              InSight — Studying the 'Inner Space' of Mars
              InSight, short for Interior Exploration using Seismic Investigations, Geodesy and Heat Transport, is a Mars lander designed to give the Red Planet its first thorough checkup since it formed 4.5 billion years ago. It is the first outer space robotic explorer to study in-depth the "inner space" of Mars: its crust, mantle, and core.
            </Card.Body>
          </Accordion.Collapse>
        </Card>

              <Card>
          <Card.Header>
            <Accordion.Toggle as = {Button} variant='link' eventKey = '1'>
              Weather Data
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey = '1'>
            <Card.Body>
              The weather information above are provided by NASA's Insight Mars lander.
              NASA’s InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth
              plain near Mars’ equator.   
            </Card.Body>
          </Accordion.Collapse>
        </Card>

              <Card>
          <Card.Header>
            <Accordion.Toggle as = {Button} variant='link' eventKey = '2'>
              Interior of Mars
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey = '2'>
            <Card.Body>
              Mars' Interior: Artist's rendition showing the inner structure of Mars. The topmost layer is known as the crust, underneath it is the mantle, which rests on a solid inner core.
              Studying Mars' interior structure answers key questions about the early formation of rocky planets in our inner solar system - Mercury, Venus, Earth, and Mars - more than 4 billion years ago, as well as rocky exoplanets. InSight also measures tectonic activity and meteorite impacts on Mars today.
              The lander uses cutting edge instruments, to delve deep beneath the surface and seek the fingerprints of the processes that formed the terrestrial planets. It does so by measuring the planet's "vital signs": its "pulse" (seismology), "temperature" (heat flow), and "reflexes" (precision tracking).
              This mission is part of NASA's Discovery Program for highly focused science missions that ask critical questions in solar system science.  
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
      </div>
      </Col>
    </Row>
    </Container>
  );
}

export default Mission;