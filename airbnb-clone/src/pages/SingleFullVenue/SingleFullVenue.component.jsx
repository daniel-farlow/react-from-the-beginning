import React, { Component } from 'react';
import './SingleFullVenue.css';
import axios from 'axios';
import Point from './Point.component';

class SingleFullVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      singleVenue: {},
      points: []
    }
  }

  async componentDidMount() {
    const {venueId} = this.props.match.params;
    const url = `${process.env.REACT_APP_API_HOST}/venue/${venueId}`
    const axiosResponse = await axios.get(url);
    const singleVenue = axiosResponse.data;

    const pointsUrl = `${process.env.REACT_APP_API_HOST}/points/get`;
    const pointsAxiosResponse = await axios.get(pointsUrl);

    const points = singleVenue.points.split(',').map((point, i) => (
      <Point key={i} pointDesc={pointsAxiosResponse.data} point={point} />
    ))
    this.setState({
      singleVenue,
      points
    });
  }

  reserveNow = e => {
    console.log('Reserve!')
  }

  render() { 
    const {imageUrl, location, title, guests, details, amenities, pricePerNight, rating} = this.state.singleVenue;
    return (  
      <div className="row single-venue">
        <div className="col s12 center">
          <img src={imageUrl} alt=""/>
        </div>
        <div className="col s8 location-details offset-s2">
          <div className="col s8 left-details">
            <div className="location">{location}</div>
            <div className="title">{title}</div>
            <div className="guests">{guests}</div>
            <div className="divider"></div>
            {this.state.points}
            <div className="details">{details}</div>
            <div className="amenities">{amenities}</div>
          </div>

          <div className="col s4 right-details">
            <div className="price-per-day">${pricePerNight}<span> per day</span></div>
            <div className="rating">{rating}</div>
            <div className="col s6">
              Check-In
              <input type="date"/>
            </div>
            <div className="col s6">
              Check-Out
              <input type="date"/>
            </div>
            <div className="col s12">
              <select className='browser-default'>
                <option value="1">1 Guest</option>
                <option value="2">2 Guest</option>
                <option value="3">3 Guest</option>
                <option value="4">4 Guest</option>
                <option value="5">5 Guest</option>
                <option value="6">6 Guest</option>
                <option value="7">7 Guest</option>
                <option value="8">8 Guest</option>
              </select>
            </div>
            <div className="col s12 center">
              <button onClick={this.reserveNow} className='btn red accent-2'>Reserve</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default SingleFullVenue;