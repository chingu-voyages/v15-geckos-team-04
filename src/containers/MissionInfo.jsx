import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import AccordionCard from '../components/accordionCard';
import missionInfo from '../assets/missionInfo.json'
import './Mission.css';

const Mission = () => {
	//  define default background in case the background image doesn't fetch properly
	const defaultBg = `https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80`;
	const [bg,setBg] = useState(defaultBg);
	
	
	  useEffect (() => {
		fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
		  .then(res => res.json())
		  .then(data => setBg(data.url))
	  },[]);

	return (
		<Container id="mission" className="mission_wrapper">
			<div className = 'overlay' style = {{backgroundImage: `url(${bg}`}} ></div>
			<Row className="row_mission">
				<Col className="col" xs={10} sm={9} md={8} lg={7}>
					<div className="mission_video">
						<iframe src="https://youtube.com/embed/LKLITDmm4NA" allowFullScreen={true} frameBorder="0" />
					</div>
				</Col>

				<Col className="col" xs={10} sm={9} md={9} lg={5}>
					<div className="mission_information">
						<Accordion defaultActiveKey="">
							{missionInfo.map(i=>(<AccordionCard key={i} header={i.header} content={i.content}/>))}
						</Accordion>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Mission;
