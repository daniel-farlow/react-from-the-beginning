import React, { Fragment } from 'react';

const Headers = ({temp, specificWeatherDesc, cityName, cityState, searchCount}) => {
  return (
    <Fragment>
      {searchCount === 0 ? <h2>Search for US City Weather!</h2> : null}
      {searchCount === 0 ? <h3 style={{marginBottom: 30}}>Sample City: {cityName}, {cityState}</h3> 
        : <h2>{cityName}, {cityState}: {Math.round(temp)}{String.fromCharCode(176, 70).toUpperCase()} and {specificWeatherDesc}</h2> }
    </Fragment>
  );
};

export default Headers;
