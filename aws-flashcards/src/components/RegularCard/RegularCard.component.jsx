import React, {Fragment} from 'react';

const RegularCard = (props) => {
  const {service, desc, cat} = props.questionData;
  return ( 
    <Fragment>
      <div className="card-back">
        {service}
      </div>
      <div className="card-front">
        <div>{desc}</div>
        <div>{cat}</div>
      </div>
    </Fragment>
  );
}
 
export default RegularCard;