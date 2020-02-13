import React from 'react';
import { Button } from 'react-bootstrap';

const scaleButton = props => {
   const {variant, onClick, scale} = props;

	return (
		<Button id="btn" variant={variant} onClick={onClick}>
			{scale ? '°C' : '°F'}
		</Button>
	);
};

export default scaleButton;
