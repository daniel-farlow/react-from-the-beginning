import React, { Fragment } from 'react';

const RandomWeighted = (props) => {
  const {service, common, cat} = props.questionData;

  return (
    <Fragment>
      <div className="card-back">
        <div>{service}</div>
        <div className="commonality">{common}</div>
      </div>
      <div className="card-front">
        <div>{cat}</div>
      </div>
    </Fragment>
  );
};

export default RandomWeighted;
