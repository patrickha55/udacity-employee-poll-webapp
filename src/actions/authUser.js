import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { SET_AUTH_USER } from '../utils/common/constants';
import { _validateUserLogin } from '../_DATA';

export const setAuthUser = (id) => ({
  type: SET_AUTH_USER,
  id
});

/**
 * This is the handler for authenticating the user.
 * @param {*} id of the user.
 * @param {*} password of the user. 
 * @returns 
 */
export const handleAuthUser = (id, password) =>
  async dispatch => {
    try {
      dispatch(showLoading());

      if (id === null || id === undefined || id === '') {
        alert('Please enter your username.');
        dispatch(hideLoading());
        return;
      }

      if (password === null || password === undefined || password === '') {
        alert('Please enter your password.');
        dispatch(hideLoading());
        return;
      }

      const result = await _validateUserLogin(id, password);

      if (result === false) {
        alert('Invalid username or password.');
        dispatch(hideLoading());
        return;
      }

      dispatch(setAuthUser(id));

      return dispatch(hideLoading());
    } catch (error) {
      dispatch(setAuthUser(null));
    }
  };
