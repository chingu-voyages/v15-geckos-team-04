import React from "react";
import Navbar from './containers/Navbar'
import MainWeatherSection from "./containers/MainWeatherSection";
import Footer from "./containers/Footer";
import Mission from './containers/Mission';
import {
  Container
} from "react-bootstrap";


function App() {
    return (
      <div>             
        <Container>
          <Navbar />
          <MainWeatherSection />
          <Mission />
          <Footer />
        </Container>
      </div>
    );
  }
  
  export default App;

