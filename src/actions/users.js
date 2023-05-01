import { RECEIVE_USERS } from '../utils/common/constants';

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});
