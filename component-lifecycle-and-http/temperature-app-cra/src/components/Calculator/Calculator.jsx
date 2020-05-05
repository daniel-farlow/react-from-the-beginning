import React, { Component, Fragment } from 'react';
import TemperatureInput from '../TemperatureInput/TemperatureInput'
import BoilingVerdict from '../BoilingVerdict/BoilingVerdict';

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  handleTempChange = (temperature, scale) => {
    switch(scale) {
      case 'c':
        this.setState({
          scale: 'c', 
          temperature
        });
        break;
      case 'f':
        this.setState({
          scale: 'f', 
          temperature
        });
        break;
      default:
        return;
    }
  }

  render() {
    const {scale, temperature} = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <Fragment>
        <TemperatureInput 
          scale='c' 
          temperature={celsius} 
          onTemperatureChange={this.handleTempChange} />
        <TemperatureInput 
          scale='f' 
          temperature={fahrenheit} 
          onTemperatureChange={this.handleTempChange} />
        <BoilingVerdict 
          celsius={parseFloat(celsius)}  />
      </Fragment>
    );
  }
}

export default Calculator;