import moment from 'moment/moment';

const locale = 'vi-VN';

export function formatDate(timestamp) {
  return moment(timestamp).format('h:mm:ss a | MMMM Do YYYY');
}

/**
 * This function converts a timestamp to a relative time string.
 * @param {*} timestamp is a epoch time in milliseconds
 * @returns {string} a relative time string 
 */
export function timestampToRelativeTime(timestamp) {
  const day = new Date(timestamp);

  return moment(timestamp).fromNow();
}