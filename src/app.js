import React from "react";
import MainWeatherSection from "./containers/MainWeatherSection";
import Navbar from './containers/Navbar'
import Footer from "./containers/Footer";
import {Container} from "react-bootstrap";

function App() {
    return (
      <div>             
      <Container>
        <Navbar/>
        <MainWeatherSection />
        <Footer />
        </Container>
        </div>
    );
  }
  
  export default App;