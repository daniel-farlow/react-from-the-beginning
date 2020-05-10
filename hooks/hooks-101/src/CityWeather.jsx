import React, { Component } from 'react';
import axios from 'axios';

class CityWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  async componentDidMount() {
    this.getWeather()
  }
  
  async componentDidUpdate(prevProps) {
    if (prevProps.cityName !== this.props.cityName) {
      this.getWeather()
    }
  }
  
  getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.cityName}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`
    const resp = await axios.get(url);
    console.log(resp.data)
  }
  
  render() { 
    const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`
    return (  
      <h1>{this.props.cityName}</h1>
    );
  }
}
 
export default CityWeather;