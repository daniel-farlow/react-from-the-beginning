import React, { Component } from 'react';
import './City.css';
import { Link } from 'react-router-dom';

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const {cityName, image, price, id} = this.props.city;
    return (  
      <div className="city col s12">
        <Link to={`/city/${id}`}>
          <div className="image">
            <img src={image} alt=""/>
          </div>
          <div className="city-name">{cityName}</div>
          <div className="price">${price}/night average</div>
        </Link>
      </div>
    );
  }
}
 
export default City;