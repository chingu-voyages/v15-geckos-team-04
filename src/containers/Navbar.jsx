import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<nav>
			<Link to="weather" smooth={true}>
				Current Weather
			</Link>
			<Link to="forecast" smooth={true}>
				7-Days Forecast
			</Link>
			<Link to="reports" smooth={true}>
				Weather Reports
			</Link>
			<Link to="mission" smooth={true}>
				InSight Mission
			</Link>
		</nav>
	);
};

export default Navbar;
