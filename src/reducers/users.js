import { RECEIVE_USERS } from '../utils/common/constants';

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
    default:
      return state;
  };
}