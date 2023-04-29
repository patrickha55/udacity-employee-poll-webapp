/**
 * This is the reducer for users.
 * 
 * @param {*} state is the current state.
 * @param {*} action is the action to be executed.
 * @returns {*} the new state. 
 */
export default function users(state, action) {
  switch (action.type) {
    case INITIAL_DATA:
      return {
        ...state,
        ...action.data.users,
      };
    default:
      return state;
  };
}