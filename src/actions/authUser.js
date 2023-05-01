import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { LOGOUT_AUTH_USER, SET_AUTH_USER } from '../utils/common/constants';
import { _validateUserLogin } from '../_DATA';

export const setAuthUser = (id) => ({
  type: SET_AUTH_USER,
  id,
});

export const logoutAuthUser = (id) => ({
  type: LOGOUT_AUTH_USER,
  id,
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
      dispatch(showLoading('login'));

      if (id === null || id === undefined || id === '') {
        dispatch(hideLoading('login'));
        alert('Please enter your username.');
        return;
      }

      if (password === null || password === undefined || password === '') {
        dispatch(hideLoading('login'));
        alert('Please enter your password.');
        return;
      }

      const result = await _validateUserLogin(id, password);

      if (result === false) {
        dispatch(hideLoading('login'));
        alert('Invalid username or password.');
        return;
      }

      dispatch(setAuthUser(id));

      return dispatch(hideLoading('login'));
    } catch (error) {
      dispatch(setAuthUser(null));
    }
  };

export const handleLogoutAuthUser = (id) =>
  dispatch => {
    try {
      dispatch(showLoading());

      setTimeout(() => {
        dispatch(logoutAuthUser(id));
      }, 1000);

      return dispatch(hideLoading());
    } catch (error) {
      dispatch(setAuthUser(id));

      dispatch(hideLoading());

      alert('An error occurred while logging out.');
    }
  };
