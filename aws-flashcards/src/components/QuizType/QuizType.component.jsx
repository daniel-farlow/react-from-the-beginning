import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const QuizType = (props) => {
  const {icon: quizIcon, category: quizType, userChoice} = props;
  return (
    <li className="col-sm-3 text-center">
      <div className="nav-card" onClick={() => userChoice(quizType)}>
        <FontAwesomeIcon icon={quizIcon} size="4x" />
        <span>{quizType}</span>
      </div>
    </li>
  );
};

export default QuizType;
