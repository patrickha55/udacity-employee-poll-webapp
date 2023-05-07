import React from 'react';
import { connect } from 'react-redux';

import Question from './Question';

const Questions = ({
  filteredQuestionIds,
  title
}) => {
  return (
    <div className='shadow p-3 mt-2 mb-4 bg-body rounded'>
      <h1 className='display-5 fw-lighter text-center p-4'>{title}</h1>
      <div className='row mx-1 mb-2'>
        {
          filteredQuestionIds.map(id => (
            <div key={id} className='col-4'>
              <Question
                id={id}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({
  questions,
  authUser
}, {
  title,
  isNewQuestion
}) => {
  let newQuestionIds = [], answeredQuestionIds = [];

  if (isNewQuestion === true) {
    newQuestionIds = Object.keys(questions)
      .filter(id =>
        !Object.values(questions[id].optionOne.votes).includes(authUser)
        &&
        !Object.values(questions[id].optionTwo.votes).includes(authUser)
      ).sort(
        (first, second) => questions[second].timestamp - questions[first].timestamp
      );
  }

  if (isNewQuestion === false) {
    answeredQuestionIds = Object.keys(questions)
      .filter(id =>
        Object.values(questions[id].optionOne.votes).includes(authUser)
        ||
        Object.values(questions[id].optionTwo.votes).includes(authUser)
      ).sort(
        (first, second) => questions[second].timestamp - questions[first].timestamp
      );;
  }

  return {
    filteredQuestionIds: isNewQuestion === true ? newQuestionIds : answeredQuestionIds,
    title,
  };
};

export default connect(mapStateToProps)(Questions);
