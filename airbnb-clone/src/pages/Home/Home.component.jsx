import React, { Component, Fragment } from 'react';
import './Home.css';
import SearchBox from './SearchBox.component';
import Spinner from '../../utility/Spinner/Spinner.component';
import axios from 'axios';
import Cities from '../../utility/Cities/Cities.component';
import Activities from '../../utility/Activities/Activities.component';
import Venues from '../../utility/Venues/Venues.component';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      europeCities: {},
      asiaCities: {},
      exoticCities: {},
      activities: [],
      recVenues: {}
    };
  }

  async componentDidMount() {
    const citiesToRequest = {
      cities: `${process.env.REACT_APP_API_HOST}/cities/recommended`,
      europeCities: `${process.env.REACT_APP_API_HOST}/cities/europe`,
      asiaCities: `${process.env.REACT_APP_API_HOST}/cities/asia`,
      exoticCities: `${process.env.REACT_APP_API_HOST}/cities/exotic`
    }

    const citiesPromises = Object.values(citiesToRequest).map(cityReqURL => axios.get(cityReqURL));
    const resolvedCitiesPromises = await Promise.all(citiesPromises);
    const citiesWithData = Object.keys(citiesToRequest).reduce((acc, val, i) => {
      acc[val] = resolvedCitiesPromises[i].data
      return acc
    }, {})

    this.setState({
      ...citiesWithData
    });

    const activitiesURL = `${process.env.REACT_APP_API_HOST}/activities/today`;
    const activities = await axios.get(activitiesURL);

    this.setState({
      activities: activities.data
    })

    const recVenuesUrl = `${process.env.REACT_APP_API_HOST}/venues/recommended`;
    const venues = await axios(recVenuesUrl);
    this.setState({
        recVenues: venues.data,
    })


  }
  


  render() {
    if ((this.state.cities.length === 0) || (!this.state.recVenues.venues)) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="home col s12">
              <div className="upper-fold">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid lower-fold">
          <div className="row">
            <div className="col s12">
              <Cities cities={this.state.cities} header='Recommended Cities For You' />
            </div>

            <div className="col s12">
              <Activities activities={this.state.activities} header='Today in your area' />
            </div>

            <div className="col s12">
              <Cities cities={this.state.europeCities.cities} header={this.state.europeCities.header} />
            </div>

            <div className="col s12">
              <Venues venues={this.state.recVenues.venues} header={this.state.recVenues.header} />
            </div>

            <div className="col s12">
              <Cities cities={this.state.asiaCities.cities} header={this.state.asiaCities.header} />
            </div>

            <div className="col s12">
              <Cities cities={this.state.exoticCities.cities} header={this.state.exoticCities.header} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
