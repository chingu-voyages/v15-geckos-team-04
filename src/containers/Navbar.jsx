import React from 'react';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = () => {
	return (
		<Container>
		<Row className="justify-content-end">
			<Col md="auto" xs="6">
				<Link to="weather" smooth={true} className="link">
					Current Weather
				</Link>
			</Col>
			<Col md="auto" xs="6">
				<Link to="forecast" smooth={true} className="link">
					7-Days Forecast
				</Link>
			</Col>
			<Col md="auto" xs="6">
				<Link to="reports" smooth={true} className="link">
					Weather Reports
				</Link>
			</Col>
			<Col md="auto" xs="6">
				<Link to="mission" smooth={true} className="link">
					InSight Mission
				</Link>
			</Col>
		</Row>
	</Container>
	);
};

export default Navbar;
