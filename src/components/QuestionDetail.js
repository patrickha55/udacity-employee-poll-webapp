import React from 'react';
import { connect } from 'react-redux';
import withRouter from '../utils/routerHelper';
import { handleChooseQuestionOption } from '../actions/questions';

const QuestionDetail = ({
  question,
  user,
  authUser,
  navigate,
  dispatch,
  totalVotedForTheFirstOption,
  totalVotedForTheSecondOption,
  firstOptionVotedPercentage,
  secondOptionVotedPercentage,
}) => {
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

  let result = <div className='text-center'>
    <h2>Loading</h2>
  </div>;

  if (question) {
    const isTheFirstQuestionAnswered = question.optionOne.votes.includes(authUser);
    const isTheSecondQuestionAnswered = question.optionTwo.votes.includes(authUser);

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
              className='btn btn-primary btn-lg col-6 d-flex flex-column justify-content-between position-relative'
              data-bs-toggle='button'
              autoComplete='off'
              onClick={(e) => handleClick(e, question.id, 0)}
              disabled={isTheFirstQuestionAnswered}
            >
              <p>{question.optionOne.text}</p>
              {
                (isTheFirstQuestionAnswered || isTheSecondQuestionAnswered) && (
                  <div className='border-top w-100'>
                    <small className='text-light d-flex flex-row justify-content-between'>
                      <span>{totalVotedForTheFirstOption} votes</span>
                      {
                        isTheFirstQuestionAnswered && <span className="badge material-icons-outlined" style={{ fontSize: '1em' }}>check_circle</span>
                      }
                      <span>{firstOptionVotedPercentage} %</span>
                    </small>
                  </div>
                )
              }
            </button>
            <button
              type='button'
              className='btn btn-danger btn-lg col-6 d-flex flex-column justify-content-between'
              data-bs-toggle='button'
              autoComplete='off'
              onClick={(e) => handleClick(e, question.id, 1)}
              disabled={isTheSecondQuestionAnswered}
            >
              <p className='w-100'>{question.optionTwo.text}</p>
              {
                (isTheFirstQuestionAnswered || isTheSecondQuestionAnswered) && (
                  <div className='border-top w-100'>
                    <small className='text-light d-flex flex-row justify-content-between'>
                      <span>{totalVotedForTheSecondOption} votes</span>
                      {
                        isTheSecondQuestionAnswered && <span className="badge material-icons-outlined" style={{ fontSize: '1em' }}>check_circle</span>
                      }
                      <span>{secondOptionVotedPercentage} %</span>
                    </small>
                  </div>
                )
              }
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
  const { question_id } = router.params;

  const question = questions[question_id];



  if (question) {
    const totalVotedForTheFirstOption = question.optionOne.votes.length;
    const totalVotedForTheSecondOption = question.optionTwo.votes.length;

    const totalVotes = totalVotedForTheFirstOption + totalVotedForTheSecondOption;

    const firstOptionVotedPercentage = Math.round((totalVotedForTheFirstOption / totalVotes) * 100);
    const secondOptionVotedPercentage = Math.round((totalVotedForTheSecondOption / totalVotes) * 100);

    return {
      question,
      user: users[questions[question_id].author],
      authUser,
      navigate: router.navigate,
      totalVotedForTheFirstOption,
      totalVotedForTheSecondOption,
      firstOptionVotedPercentage,
      secondOptionVotedPercentage,
    };
  }

  router.navigate('*');
};

export default withRouter(connect(mapStateToProps)(QuestionDetail));