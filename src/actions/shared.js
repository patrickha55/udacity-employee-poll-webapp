import { _getUsers } from '../../_DATA';

/**
 * This is the action creator for INITIAL_DATA.
 * @param {*} data includes users and questions.
 * @returns {{data: *, type: string}}
 */
function INITIAL_DATA(data) {
  return {
    type: INITIAL_DATA,
    data
  };
}

/**
 * This function is used to load initial data.
 * @returns {function(...[*]=)}
 */
function loadInitialData() {
  return async dispatch => {
    try {
      const users = await _getUsers();
      const questions = await _getQuestions();

      return dispatch(INITIAL_DATA({ users, questions }));
    } catch (error) {
      alert('An error occurred while loading initial data. Please try again later.');
    }
  };
}