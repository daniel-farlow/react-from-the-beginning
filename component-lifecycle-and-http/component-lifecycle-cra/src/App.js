import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import moment from 'moment';
import Headers from './Headers';
import Modal from './Modal';
import UnitedStatesSelectionForm from './UnitedStatesSelectionForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCount: -1,
      genWeatherDesc: '',
      specificWeatherDesc: '',
      temp: '',
      feelsLike: '',
      low: '',
      high: '',
      cityId: '',
      cityName: '',
      cityState: '',
      timezone: '',
      sunrise: '',
      sunset: '',
      icon: '',
      iconURL: '',
      showCityDetailsModal: true,
      sameCityState: false,
      persistentTimeCount: 0
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.cityId !== prevState.cityId) {
      this.setState((prevState, props) => ({
        searchCount: prevState.searchCount + 1
      }));
    }
  }

  componentDidMount() {
    this.persistentTimer = setInterval(() => {
      this.setState((prevState, props) => ({
        persistentTimeCount: prevState.persistentTimeCount + 1
      }));
    }, 1000);

    this.getCityWeather('Nashville', 'TN')
  }

  searchCity = e => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const cityState = document.getElementById('city-state').value;
    this.getCityWeather(city, cityState);
  }

  getCityWeather = async (city, cityState) => {
    if (city === this.state.cityName && cityState === this.state.cityState) {
      alert(`You already have data for ${city}, ${cityState}!`);
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${cityState},us&units=imperial&appid=${process.env.REACT_APP_WEATHER_APP}`;
    let weatherInfo;
    try {
      weatherInfo = await axios.get(url);
    } catch (error) {
      alert(`No data found for the city you entered: "${city}". Please try again!`);
      return;
    }
    let { weather: weatherDesc, main: weatherFacts, name: cityName, sys: { sunrise, sunset }, timezone, id: cityId } = weatherInfo.data;
    let { main: genWeatherDesc, description: specificWeatherDesc, icon } = weatherDesc[0];
    let { temp, feels_like: feelsLike, temp_min: low, temp_max: high } = weatherFacts;

    sunrise = moment.unix(sunrise).utcOffset(timezone / 60).format('h:mm A');
    sunset = moment.unix(sunset).utcOffset(timezone / 60).format('h:mm A');
    let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    let desiredState = { genWeatherDesc, specificWeatherDesc, temp, feelsLike, low, high, cityName, icon, cityState, sunrise, sunset, iconURL, cityId };

    this.setState((prevState, props) => ({
      persistentTimeCount: 0,
      sameCityState: false,
      ...desiredState
    }));
  }

  toggleModal = e => {
    this.setState((prevState, props) => ({
      showCityDetailsModal: !prevState.showCityDetailsModal,
      sameCityState: true
    }));
  }

  render() {
    console.log('render is running...')
    const { genWeatherDesc, specificWeatherDesc, temp, feelsLike, low, high, cityName, cityState, sunrise, sunset, iconURL, showCityDetailsModal, searchCount, cityId, persistentTimeCount, sameCityState } = this.state;

    const headerProps = {temp, specificWeatherDesc, cityName, cityState, searchCount};
    const modalProps = {genWeatherDesc, specificWeatherDesc, temp, feelsLike, low, high, cityName, iconURL, cityState, sunrise, sunset, searchCount, cityId, persistentTimeCount, sameCityState};

    return (
      <div className="App">
        <div className="row">
          <div className="col s6 offset-s3">
            <Headers { ...headerProps } />
            <div className="row center-align">
            {showCityDetailsModal ? <a
              className="waves-effect waves-light btn modal-trigger"
              href="#modal1"
              style={{marginRight: 40 }}
            >See Weather Details
            </a> : ''}
            <button style={{marginLeft: 20}} onClick={this.toggleModal} className='btn'> {showCityDetailsModal ? 'Remove Weather Details and Timer' : 'Add Weather Details and Timer'}</button>
            </div>
            <form onSubmit={this.searchCity}>
              <UnitedStatesSelectionForm />
            </form>
          </div>
        </div>
        {showCityDetailsModal ? <Modal { ...modalProps } /> : ''}
      </div>
    );
  }
}

export default App;