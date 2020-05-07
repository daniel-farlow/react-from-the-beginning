import React, { Fragment } from 'react';

const MultiCard = (props) => {
  const {service, options, answer} = props.questionData;
  const questionOptions = options.map((option, i) => {
    return <li key={i} style={{display: 'block', textAlign: 'left'}}>({String.fromCharCode(i+97)}) {option}</li>
  })
  const answerLetter = String.fromCharCode(options.indexOf(answer) + 97);

  return (
    <Fragment>
      <div className="card-back">
        <div>{service}</div>
        <ul className="multi">
          {questionOptions}
        </ul>
      </div>
      <div className="card-front">
        ({answerLetter}) {answer}
      </div>
    </Fragment>
  );
};

export default MultiCard;
