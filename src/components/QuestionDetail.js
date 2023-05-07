import React from 'react';
import { connect } from 'react-redux';
import withRouter from '../utils/routerHelper';
import { handleChooseQuestionOption } from '../actions/questions';

const QuestionDetail = ({ question, user, authUser, navigate, dispatch }) => {
  let result = <h2 className='text-center'>No questions found</h2>;

  const handleClick = (event, qid, flag) => {
    event.preventDefault();

    const option = { qid, flag };

    dispatch(handleChooseQuestionOption(option));
  };

  const handleGoBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    }
    else {
      navigate('/');
    }
  };

  const isTheFirstQuestionAnswered = question.optionOne.votes.includes(authUser);
  const isTheSecondQuestionAnswered = question.optionTwo.votes.includes(authUser);

  if (question) {
    result = (
      <div className='px-4 py-5 my-5 text-center position-relative'>
        <div role='button' className='gap-2 position-absolute top-0 left-0 d-flex'>
          <span className="material-icons-round">arrow_back</span>
          <p onClick={handleGoBack}>Go Back</p>
        </div>
        <img className='d-block mx-auto mb-4 rounded' src={user.avatarURL} alt='' width='200' height='200' />
        <h2 className='text-center'>Poll by {question.author}</h2>
        <div className='col-lg-8 mx-auto'>
          <p className='lead mb-4'>Would You Rather</p>
          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
            <button
              type='button'
              className='btn btn-primary btn-lg col-6'
              data-bs-toggle='button'
              autoComplete='off'
              onClick={(e) => handleClick(e, question.id, 0)}
              disabled={isTheFirstQuestionAnswered}
            >
              <p>{question.optionOne.text}</p>
            </button>
            <button
              type='button'
              className='btn btn-danger btn-lg col-6'
              data-bs-toggle='button'
              autoComplete='off'
              onClick={(e) => handleClick(e, question.id, 1)}
              disabled={isTheSecondQuestionAnswered}
            >
              <p>{question.optionTwo.text}</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='my-5' style={{ minHeight: '90vh' }}>
      {result}
    </div>
  );
};

const mapStateToProps = ({ questions, users, authUser }, { router }) => {
  const { id } = router.params;

  return {
    question: questions[id],
    user: users[questions[id].author],
    authUser,
    navigate: router.navigate,
  };
};

export default withRouter(connect(mapStateToProps)(QuestionDetail));