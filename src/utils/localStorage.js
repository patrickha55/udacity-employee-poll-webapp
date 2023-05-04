/**
 * This function is used to load state from localStorage.
 * @param {*} state 
 * @returns 
 */
export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

/**
 * This function is used to save state to localStorage.
 * @param {*} state 
 * @returns 
 */
export const saveState = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);

    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

/**
 * This function is used to remove state from localStorage.
 * @param {*} state 
 */
export const removeState = (key) => {
  try {
    console.log('removing state from localStorage: ', key);
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};