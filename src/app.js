import React from "react";
import MainWeatherSection from "./containers/MainWeatherSection";
import Footer from "./containers/Footer";
import Mission from './containers/Mission';
import {Container} from "react-bootstrap";

//Style sheet required for react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <div>             
        <Container>
          <MainWeatherSection />
          <Footer />
          <Mission />
        </Container>
      </div>
    );
  }
  
  export default App;