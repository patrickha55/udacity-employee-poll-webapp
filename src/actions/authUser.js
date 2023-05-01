import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { SET_AUTH_USER } from '../utils/common/constants';
import { _validateUserLogin } from '../_DATA';

export const setAuthUser = (id) => ({
  type: SET_AUTH_USER,
  id
});

