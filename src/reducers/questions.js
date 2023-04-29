import { INITIAL_DATA } from '../common/constants';

/**
 * This is the reducer for questions.
 * @param {*} state is the current state.
 * @param {*} action is the action to be executed.
 * @returns {*} the new state.
 */
export default function questions(state = [], action) {
  switch (action.type) {
    case INITIAL_DATA:
      return {
        ...state,
        ...action.data.questions,
      };
    default:
      return state;
  };
}