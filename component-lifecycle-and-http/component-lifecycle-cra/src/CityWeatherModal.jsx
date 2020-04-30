import React from 'react';

const CityWeatherModal = (props) => {
  const { genWeatherDesc, specificWeatherDesc, temp, feelsLike, low, high, cityName, iconURL, cityState, sunrise, sunset } = props.cityWeatherData;
  return (
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
  );
};

export default CityWeatherModal;