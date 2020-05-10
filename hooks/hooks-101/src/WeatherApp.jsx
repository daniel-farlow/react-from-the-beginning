import React, { Component } from 'react';
import './App.css';
import CityWeather from './CityWeather';

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      city: 'London',
      cityNameForWeather: 'London'
    }
  }

  changeCity = e => {
    this.setState({
      city: e.target.value
    });
  }

  citySearch = e => {
    e.preventDefault();
    this.setState({
      cityNameForWeather: this.state.city
    });
  }

  render() { 
    return ( 
      <div className="container">
        <CityWeather cityName={this.state.cityNameForWeather} />
        <div className="row justify-content-center">
          <form onSubmit={this.citySearch}>
            <input onChange={this.changeCity} type='text' value={this.state.city}  />
            <input type="button" className='btn btn-primary' value='Search!' />
          </form>
        </div>
      </div>
    );
  }
}
 
export default WeatherApp;