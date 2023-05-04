import moment from 'moment/moment';

/**
 * This function converts a timestamp to a date string.
 * @param {*} timestamp is a epoch time in milliseconds
 * @returns {string} a date string
 */
export const formatDate = (timestamp) => moment(timestamp).format('h:mm:ss a | MMMM Do YYYY');

/**
 * This function converts a timestamp to a relative time string.
 * @param {*} timestamp is a epoch time in milliseconds
 * @returns {string} a relative time string 
 */
export const timestampToRelativeTime = (timestamp) => moment(timestamp).fromNow();
