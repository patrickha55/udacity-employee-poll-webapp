import { CHOOSE_QUESTION_OPTION, CREATE_QUESTION, RECEIVE_USERS } from '../utils/common/constants';

/**
 * This is the reducer for users.
 * 
 * @param {{
 *  id: string,
 *  name: string,
 *  avatarURL: string,
 *  answers: {
 *  [questionId: string]: string,
 *  },
 *  questions: string[],
 * }} state is the current user's state.
 * @param {*} action is the action to be executed.
 * @returns {*} the new state. 
 */
export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case CREATE_QUESTION:
      const { author, id } = action.question;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id]),
        },
      };
    case CHOOSE_QUESTION_OPTION:
      const { authedUser: authUser, qid, answer } = action.option;

      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer,
          }
        }
      };
    default:
      return state;
  };
}