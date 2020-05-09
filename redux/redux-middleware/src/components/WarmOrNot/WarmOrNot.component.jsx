import React, { Component } from 'react';
import {connect} from 'react-redux';

class WarmOrNot extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  render() { 
    const weather = this.props.weather;
    // there is no weather object
    if (!weather.main) {
      return (
        <h3>Fetch the weather to find out if it's warm!</h3>
      )
    }

    // there is a weather object
    return weather.main.temp > 70 ? <h3>It's warm!</h3> : <h3>It's cold! :(</h3>
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}
 
export default connect(mapStateToProps)(WarmOrNot);