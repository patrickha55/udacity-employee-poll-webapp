import { LOGOUT_AUTH_USER, SET_AUTH_USER } from '../utils/common/constants';

export default function authUser(state = null, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.id;
    case LOGOUT_AUTH_USER:
      return '';
    default:
      return state;
  }
}
