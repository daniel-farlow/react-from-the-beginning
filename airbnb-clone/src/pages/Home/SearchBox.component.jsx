import React, { Component } from 'react';
import './SearchBox.css'

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      where: '',
      checkIn: '',
      checkOut: '',
      guests: 0
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() { 
    return (  
      <div className="home-search-box col m4">
        <h1>Book unique places to stay and things to do</h1>
        <form action="/#" className="search-box-form">
          <div className="col m12">
            <div className="form-label">Where</div>
            <div className="input-field" id="where">
              <input onChange={this.handleChange} type='text' name='where' value={this.state.where} className='browser-default' placeholder='Anywhere' />
            </div>
          </div>

          <div className="col m6">
            <div className="form-label">Check-In</div>
            <div className="input-field" id="check-in">
              <input onChange={this.handleChange} type='date' name='checkIn' value={this.state.checkIn} className='browser-default' placeholder='Anywhere' />
            </div>
          </div>

          <div className="col m6">
            <div className="form-label">Check-Out</div>
            <div className="input-field" id="check-in">
              <input onChange={this.handleChange} type='date' name='checkOut' value={this.state.checkOut} className='browser-default' placeholder='Anywhere' />
            </div>
          </div>

          <div className="col m12">
            <div className="form-label">Where</div>
            <div className="input-field" id="where">
              <input onChange={this.handleChange} type='number' name='guests' value={this.state.guests} className='browser-default' placeholder='Anywhere' />
            </div>
          </div>

          <div className="col m12 submit-btn">
            <div className="input-field" id="submit-btn">
              <input type="submit" className="btn-large waves-effect waves-light red accent-2"/>
            </div>
          </div>

        </form>
      </div>
    );
  }
}
 
export default SearchBox;