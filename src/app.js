import React from "react";
import Navbar from './containers/Navbar'
import MainWeatherSection from "./containers/MainWeatherSection";
import Footer from "./containers/Footer";
import MissionInfo from './containers/MissionInfo';
import {
  Container
} from "react-bootstrap";


function App() {
    return (
      <div>             
        <Container>
          <Navbar />
          <MainWeatherSection />
          <MissionInfo />
          <Footer />
        </Container>
      </div>
    );
  }
  
  export default App;

