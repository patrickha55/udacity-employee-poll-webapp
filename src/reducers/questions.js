import { RECEIVE_QUESTIONS } from '../utils/common/constants';

/**
 * This is the reducer for questions.
 * @param {*} state is the current state.
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
    default:
      return state;
  };
}