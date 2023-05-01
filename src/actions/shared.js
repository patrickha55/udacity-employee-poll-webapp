import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { _getQuestions, _getUsers } from '../_DATA';
import { setAuthUser } from './authUser';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';

const authUser = '';

/**
 * This function is used to load initial data.
 * @returns {function(...[*]=)}
 */
export function loadInitialData() {
  return async dispatch => {
    try {
      dispatch(showLoading());

      const users = await _getUsers();
      const questions = await _getQuestions();

      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthUser(authUser));

      return dispatch(hideLoading());
    } catch (error) {
      alert('An error occurred while loading initial data. Please try again later.');

      console.log(error);

      dispatch(hideLoading());
    }
  };
}
