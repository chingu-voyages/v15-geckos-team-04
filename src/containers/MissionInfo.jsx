import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import defaultBg from '../img/mission-bg.jpeg'

const Mission = () => {
	//  define default background in case the background image doesn't fetch properly
	const [bg, setBg] = useState(defaultBg);
	  
	  useEffect (() => {
		fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
		  .then(res => res.json())
		  .then(data => setBg(data.url))
	  },[]);

	return (
		<Container id="mission" className="mission_wrapper">
			<div className = 'overlay' style = {{backgroundImage: `url(${bg}`}} ></div>
			<Row className="row_mission">
				<Col className="col" >
					<div className="mission_video">
						<iframe title="inSight video" src="https://youtube.com/embed/LKLITDmm4NA" allowFullScreen={true} frameBorder="0" />
					</div>
				</Col>

				<Col className="col" >
					<div className="mission_information">
						<Accordion defaultActiveKey="">
							<Card>
								<Card.Header>
									<Accordion.Toggle as={Button} variant="light" eventKey="0">
										InSight — Studying the 'Inner Space' of Mars
									</Accordion.Toggle>
								</Card.Header>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<p>
											The main purpose of the Insight mission is to get more knowledge about the
											composition of Mars.
										</p>
										<p>
											<strong>InSight</strong>, short for <strong>I</strong>nterior
											<strong>E</strong>xploration using <strong>S</strong>eismic
											<strong>I</strong>nvestigations, <strong>G</strong>eodesy and
											<strong>H</strong>eat <strong>T</strong>ransport, is a Mars lander designed
											to give the Red Planet its first thorough checkup since it formed 4.5
											billion years ago.
										</p>
										<p>
											It is the first outer space robotic explorer to study in-depth the "inner
											space" of Mars: its crust, mantle, and core.
										</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>

							<Card>
								<Card.Header>
									<Accordion.Toggle as={Button} variant="light" eventKey="1">
										Weather Data
									</Accordion.Toggle>
								</Card.Header>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
										<p>The weather information above are provided by NASA's Insight Mars lander.</p>
										<p>
											NASA’s InSight Mars lander takes continuous weather measurements
											(temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a
											flat, smooth plain near Mars’ equator.
										</p>
										<p>
											InSight also measures tectonic activity and meteorite impacts on Mars today.
										</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>

							<Card>
								<Card.Header>
									<Accordion.Toggle as={Button} variant="light" eventKey="2">
										Interior of Mars
									</Accordion.Toggle>
								</Card.Header>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
										<p>
											Studying Mars' interior structure answers key questions about the early
											formation of rocky planets in our inner solar system - Mercury, Venus,
											Earth, and Mars - more than 4 billion years ago, as well as rocky
											exoplanets.
										</p>
										<p>
											The lander uses cutting edge instruments, to delve deep beneath the surface
											and seek the fingerprints of the processes that formed the terrestrial
											planets. It does so by measuring the planet's "vital signs": its "pulse"
											(seismology), "temperature" (heat flow), and "reflexes" (precision
											tracking).
										</p>
										<p>
											This mission is part of NASA's Discovery Program for highly focused science
											missions that ask critical questions in solar system science.
										</p>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Mission;
