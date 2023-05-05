import { CREATE_QUESTION, RECEIVE_USERS } from '../utils/common/constants';

/**
 * This is the reducer for users.
 * 
 * @param {*} state is the current state.
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
          questions: state[author].questions.concat(id),
        },
      };
    default:
      return state;
  };
}