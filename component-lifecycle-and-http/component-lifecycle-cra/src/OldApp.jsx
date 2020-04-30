import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import moment from 'moment';
import UnitedStatesSelectionForm from './UnitedStatesSelectionForm';
import CityWeatherModal from './CityWeatherModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genWeatherDesc: '',
      specificWeatherDesc: '',
      temp: '',
      feelsLike: '',
      low: '',
      high: '',
      cityName: '',
      cityState: '',
      timezone: '',
      sunrise: '',
      sunset: '',
      icon: '',
      iconURL: ''
    }
  }

  componentDidMount() {
    const modalElem = document.querySelectorAll('.modal');
    const selectElem = document.querySelectorAll('select');
    window.M.Modal.init(modalElem);
    window.M.FormSelect.init(selectElem);
  }

  searchCity = async e => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const cityState = document.getElementById('city-state').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${cityState},us&units=imperial&appid=${process.env.REACT_APP_WEATHER_APP}`;
    let weatherInfo;
    try {
      weatherInfo = await axios.get(url);
    } catch (error) {
      alert(`No data found for the city you entered: "${city}". Please try again!`);
      return;
    }
    let { weather: weatherDesc, main: weatherFacts, name: cityName, sys: { sunrise, sunset }, timezone } = weatherInfo.data;
    let { main: genWeatherDesc, description: specificWeatherDesc, icon } = weatherDesc[0];
    let { temp, feels_like: feelsLike, temp_min: low, temp_max: high } = weatherFacts;

    sunrise = moment.unix(sunrise).utcOffset(timezone / 60).format('h:mm A');
    sunset = moment.unix(sunset).utcOffset(timezone / 60).format('h:mm A');
    let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    let desiredState = { genWeatherDesc, specificWeatherDesc, temp, feelsLike, low, high, cityName, icon, cityState, sunrise, sunset, iconURL };

    this.setState({ ...desiredState })
  }

  render() {
    const { specificWeatherDesc, temp } = this.state;
    return (
      <div className="App">
        <div className="row">
          <div className="col s6 offset-s3">
            <h1>{temp === '' ? `Search for US City Weather!`
              : `${Math.round(temp)}${String.fromCharCode(176, 70).toUpperCase()} and ${specificWeatherDesc}`}</h1>
            <a
              className="waves-effect waves-light btn modal-trigger"
              href="#modal1"
              style={temp === "" ? { display: 'none', marginBottom: 10 } : { display: 'inline-block', marginBottom: 10 }}
            >See More Details
            </a>
            <form onSubmit={this.searchCity}>
              <UnitedStatesSelectionForm />
            </form>
          </div>
        </div>

        <CityWeatherModal cityWeatherData={this.state} />
      </div>
    );
  }
}

export default App;