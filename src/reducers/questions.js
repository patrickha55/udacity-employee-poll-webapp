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
      const { authedUser: authUser, qid, answer } = action.option;

      const anotherAnswerName = answer === 'optionOne' ? 'optionTwo' : 'optionOne';

      const anotherAnswer = state[qid][anotherAnswerName];

      let anotherVotes = anotherAnswer.votes;

      if (anotherVotes.includes(authUser)) {
        anotherVotes = anotherVotes.filter((vote) => vote !== authUser);
      }

      const currentVotes = state[qid][answer].votes;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: currentVotes.concat([authUser]),
          },
          [anotherAnswerName]: {
            ...anotherAnswer,
            votes: anotherVotes,
          },
        }
      };
    default:
      return state;
  };
}
