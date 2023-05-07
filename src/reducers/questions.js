import { CHOOSE_QUESTION_OPTION, CREATE_QUESTION, RECEIVE_QUESTIONS } from '../utils/common/constants';

/**
 * This is the reducer for questions.
 * 
 * Includes the following actions:
 * - RECEIVE_QUESTIONS
 * - CREATE_QUESTION
 * 
 * @param {{
 *  id: string,
 *  author: string,
 *  timestamp: number,
 *  optionOne: {
 *    votes: string[],
 *    text: string,
 *  },
 *  optionTwo: {
 *    votes: string[],
 *    text: string,
 * },
 * }} state is the current question's state.
 * @param {*} action is the action to be executed.
 * @returns {*} the new state.
 */
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case CREATE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case CHOOSE_QUESTION_OPTION:
      const { authedUser, qid, answer } = action.option;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          }
        }
      };
    default:
      return state;
  };
}
