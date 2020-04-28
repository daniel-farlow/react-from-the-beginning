import React from 'react';

const Card = (props) => {
  let {image, course, instructor} = props.card;

  return (
    <div className="card hoverable small">
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="card-content">
        <p>{course}</p>
        <p>{instructor}</p>
      </div>
      <div className="card-action">
        <a href="/#">$9.99</a>
      </div>
    </div>
  );
};

export default Card;
