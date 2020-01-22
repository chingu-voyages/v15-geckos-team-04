import React from "react";
import MainWeatherSection from "./containers/MainWeatherSection";
import Footer from "./containers/Footer";
import Mission from './containers/Mission';
import {Container} from "react-bootstrap";


function App() {
    return (
      <div>             
        <Container>
          <MainWeatherSection />
          <Mission />
          <Footer />
        </Container>
      </div>
    );
  }
  
  export default App;