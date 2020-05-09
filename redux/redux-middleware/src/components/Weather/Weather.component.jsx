import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchWeather from '../../actions/fetchWeather';
import testThunk from '../../actions/testThunk';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      city: 'London'
    }
  }

  changeCity = e => {
    this.setState({
      city: e.target.value
    })
  }

  // componentDidMount() {
  //   this.props.testThunk()
  // }

  render() { 
    console.log(this.props.weather)
    const weather = this.props.weather;
    if (!weather.main) {
      return (
        <div>
          <input type="text" onChange={this.changeCity} value={this.state.city} />
          <button onClick={() => this.props.testThunk(this.state.city)}>Fetch Weather!</button>
        </div>
      )
    }
    return (
      <div>
        <h3>It's currently {weather.main.temp}</h3>
        <input type="text" onChange={this.changeCity} value={this.state.city} />
        <button onClick={() => this.props.testThunk(this.state.city)}>Fetch Weather!</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    // fetchWeather,
    testThunk
  }, dispatch)
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Weather);