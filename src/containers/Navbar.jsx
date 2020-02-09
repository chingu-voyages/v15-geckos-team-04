import React from 'react';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = () => {
	return (
	<Container id="navbar">
		<Row className="justify-content-end">
			<Col md="auto" xs="6">
				<Link to="latest-weather" spy={true} smooth={true} duration={2000} className="link">
					Latest Weather
				</Link>
			</Col>
			<Col md="auto" xs="6">
				<Link to="six-days-weather"  spy={true} smooth={true} duration={2000} className="link">
					Last 6 Days Weather
				</Link>
			</Col>
			<Col md="auto" xs="6">
				<Link to="reports"  spy={true} smooth={true} duration={2000} className="link">
					Weather Reports
				</Link>
			</Col>
			<Col md="auto" xs="6">
				<Link to="mission"  spy={true} smooth={true} duration={2000} className="link">
					About InSight Mission
				</Link>
			</Col>
		</Row>
	</Container>
	);
};

export default Navbar;
