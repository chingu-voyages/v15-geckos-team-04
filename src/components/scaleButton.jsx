import React from "react";
import { Button } from "react-bootstrap";

class scaleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isCelsius: true};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevScale => ({
      isCelsius: !prevScale.isCelsius
    }));
    console.log('clicked')
  }

  render() {
    return (
      <Button onClick={this.handleClick} >
        {this.state.isCelsius ? '°C' : '°F'}
      </Button>
    );
  }
}


export default scaleButton;