import React from "react";
import MainWeatherSection from "./containers/MainWeatherSection";
import Footer from "./containers/Footer";
import {Container} from "react-bootstrap";

function App() {
    return (
      <div>             
      <Container>
        <MainWeatherSection />
        <Footer />
        </Container>
        </div>
    );
  }
  
  export default App;