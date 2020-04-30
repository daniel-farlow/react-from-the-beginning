import React, { Component, Fragment } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerCount: 0
    };
  }

  componentDidMount() {
    console.log('componentDidMount is running ...')

    const modalElem = document.querySelectorAll('.modal');
    const selectElem = document.querySelectorAll('select');
    window.M.Modal.init(modalElem);
    window.M.FormSelect.init(selectElem);

    this.timer = setInterval(() => {
      this.setState((prevState, props) => ({
        timerCount: prevState.timerCount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Component is about to be history ... (compnentWillUnmount running ...)')
    clearInterval(this.timer);
  }

  componentDidUpdate(prevState, prevProps) {
    console.log('THIS IS YOUR PERSISTENT TIME COUNT: ', this.props.persistentTimeCount)
    console.log('componentDidUpdate is running ... ')
    if( this.props.cityId !== prevState.cityId ) {
      this.setState({
        timerCount: 0
      });
    }
  }

  render() {
    console.log('render is running ...')
    const {genWeatherDesc, specificWeatherDesc, temp, feelsLike, low, high, cityName, iconURL, cityState, sunrise, sunset, sameCityState, persistentTimeCount} = this.props;
    const {timerCount} = this.state;
    console.log(timerCount)
    return (
      <Fragment>
        <h4>How long you have been viewing weather data for {cityName}, {cityState} (seconds): {sameCityState ? persistentTimeCount : timerCount}</h4>
        <div id="modal1" className="modal" style={{ maxWidth: 700 }}>
      <div className="modal-content">
        <table className="striped bordered">
          <thead>
            <tr>
              <th>Descriptor</th>
              <th>Information</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>City</td>
              <td>
                {cityName} ({cityState})
              </td>
            </tr>
            <tr>
              <td>Current Temperature</td>
              <td>{Math.round(temp)} (&#8457;)</td>
            </tr>
            <tr>
              <td>Feels Like</td>
              <td>{Math.round(feelsLike)} (&#8457;)</td>
            </tr>
            <tr>
              <td>High</td>
              <td>{Math.round(high)} (&#8457;)</td>
            </tr>
            <tr>
              <td>Low</td>
              <td>{Math.round(low)} (&#8457;)</td>
            </tr>
            <tr>
              <td>Sunrise</td>
              <td>{sunrise}</td>
            </tr>
            <tr>
              <td>Sunset</td>
              <td>{sunset}</td>
            </tr>
            <tr>
              <td>Weather Description</td>
              <td>
                {genWeatherDesc} ({specificWeatherDesc})
              </td>
            </tr>
            <tr>
              <td>Weather Condition</td>
              <td>
                <img src={iconURL} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Cool!
        </a>
      </div>
    </div>
      </Fragment>
    );
  }
}

export default Modal;
