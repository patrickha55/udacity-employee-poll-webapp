import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { CHOOSE_QUESTION_OPTION, RECEIVE_QUESTIONS, CREATE_QUESTION, CREATE_QUESTION_LOADING_SCOPE } from '../utils/common/constants';
import { _saveQuestion, _saveQuestionAnswer } from '../_DATA';

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const createQuestion = (question) => ({
  type: CREATE_QUESTION,
  question,
});

export const chooseQuestionOption = (option) => ({
  type: CHOOSE_QUESTION_OPTION,
  option,
});

export const handleCreateQuestion = (question) =>
  async dispatch => {
    try {
      dispatch(showLoading(CREATE_QUESTION_LOADING_SCOPE));

      if (!question) {
        alert('Please provide question');
        return;
      }

      const newQuestion = await _saveQuestion(question);

      dispatch(createQuestion(newQuestion));

      dispatch(hideLoading(CREATE_QUESTION_LOADING_SCOPE));
    } catch (error) {
      alert('Error creating question. Please try again.');
      dispatch(hideLoading(CREATE_QUESTION_LOADING_SCOPE));
    }
  };

export const handleChooseQuestionOption = (option) =>
  async (dispatch, getState) => {
    const { authUser } = getState();
    const { qid, flag } = option;

    const answer = {
      authedUser: authUser,
      qid,
      answer: flag === 0 ? 'optionOne' : 'optionTwo'
    };


    try {
      const result = await _saveQuestionAnswer(answer);

      if (result) {
        dispatch(chooseQuestionOption(answer));
      }
    } catch (error) {
      alert('Error choosing question option. Please try again.');
    }
  };
