import React from 'react';
import { connect } from 'react-redux';

import Question from './Question';

const Questions = ({
  filteredQuestions,
  title
}) => {
  return (
    <div className='rounded-1 shadow-lg mt-2 mb-5'>
      <h3 className='text-center p-4 fw-bold'>{title}</h3>
      <div className='row mx-1 mb-2'>
        {
          filteredQuestions.map(question => (
            <div className='col-4'>
              <Question
                key={question.id}
                question={question}
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
  let newQuestions = [];
  let answeredQuestions = [];

  if (isNewQuestion === true) {
    newQuestions = Object.values(questions)
      .filter(question =>
        question.optionOne.votes.find(vote => vote === authUser) !== undefined
        ||
        question.optionTwo.votes.find(vote => vote === authUser) !== undefined
      )
      .sort((a, b) => b.timestamp - a.timestamp);
  }

  if (isNewQuestion === false) {
    answeredQuestions = Object.values(questions)
      .filter(question =>
        question.optionOne.votes.find(vote => vote !== authUser) !== undefined
        ||
        question.optionTwo.votes.find(vote => vote !== authUser) !== undefined
      )
      .sort((a, b) => b.timestamp - a.timestamp);
  }

  return {
    filteredQuestions: isNewQuestion === true ? newQuestions : answeredQuestions,
    title,
  };
};

export default connect(mapStateToProps)(Questions);
