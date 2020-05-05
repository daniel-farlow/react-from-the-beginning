import React, { Component } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends Component {

  handleChange = e => {
    const {name: scale, value: temperature} = e.target;
    this.props.onTemperatureChange(temperature, scale);
  }

  render() {
    const { scale, temperature } = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input name={scale} onChange={this.handleChange} type='number' value={temperature} />
      </fieldset>
    );
  }
}

export default TemperatureInput;