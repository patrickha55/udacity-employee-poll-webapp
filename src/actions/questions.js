import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { RECEIVE_QUESTIONS, CREATE_QUESTION, CREATE_QUESTION_LOADING_SCOPE } from '../utils/common/constants';
import { _saveQuestion } from '../_DATA';

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const createQuestion = (question) => ({
  type: CREATE_QUESTION,
  question,
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
