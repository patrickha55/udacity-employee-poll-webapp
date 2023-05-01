import { RECEIVE_QUESTIONS } from '../utils/common/constants';

export const receiveQuestions = (question) => ({
  type: RECEIVE_QUESTIONS,
  question,
});
