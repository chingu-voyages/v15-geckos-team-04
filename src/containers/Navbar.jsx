import React from 'react';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = () => {
	return (
	<Container id="navbar">
		<Row className="justify-content-end">
			<Col md="auto" xs="6">
				<Link to="weather" spy={true} smooth={true} duration={2000} className="link">
					Current Weather
				</Link>
			</Col>
			<Col md="auto" xs="6">
				<Link to="forecast"  spy={true} smooth={true} duration={2000} className="link">
					7-Days Forecast
				</Link>
			</Col>
			<Col md="auto" xs="6">
				<Link to="reports"  spy={true} smooth={true} duration={2000} className="link">
					Weather Reports
				</Link>
			</Col>
			<Col md="auto" xs="6">
				<Link to="mission"  spy={true} smooth={true} duration={2000} className="link">
					InSight Mission
				</Link>
			</Col>
		</Row>
	</Container>
	);
};

export default Navbar;
