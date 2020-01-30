import React from "react";
import MainWeatherSection from "./containers/MainWeatherSection";
import Footer from "./containers/Footer";
import Mission from './containers/Mission';
import {Container} from "react-bootstrap";
import ReportsChart from "./ReportsChart"



function App() {
    return (
      <div>             
        <Container>
          <MainWeatherSection />
          <Mission />
          <ReportsChart />
          <Footer />
        
        </Container>
      </div>
    );
  }
  
  export default App;