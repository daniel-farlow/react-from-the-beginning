import React from 'react';
import QuizType from '../QuizType/QuizType.component';


const QuizBar = (props) => {
  const {userChoice} = props;

  const quizIconAndCategoryArray = [
    ['dice', 'Random'],
    ['file-alt', 'Regular'],
    ['dumbbell', 'Weighted'],
    ['font', 'Multi'],
  ]
  const quizzesInfo = quizIconAndCategoryArray.map(quizInfo => {
    const [icon, category] = [...quizInfo];
    return {icon, category};
  })
  const quizzes = quizzesInfo.map(({icon, category}, index) => {
    const quizProps = {icon, category, userChoice};
    return (<QuizType key={index} {...quizProps} />)
  })

  return ( 
    <div className="quiz-bar">
      <h1>Choose your study type!</h1>
      <ul className="nav nav-pills nav-fill">
        {quizzes}
      </ul>
    </div>
  );
}
 
export default QuizBar;