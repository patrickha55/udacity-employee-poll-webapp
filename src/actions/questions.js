import { RECEIVE_QUESTIONS } from '../utils/common/constants';

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});
