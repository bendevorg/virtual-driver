/**
 * Module to press a key
 * @module src/keyPress
*/

const driver = require('./driver/driver');
const keys = require('./utils/keys');
const constants = require('./utils/constants');

/**
 * Keyboard key press
 * @param {int} key Key to be pressed.
 * @return {boolean} A boolean telling if the input was successfully sent.
 * @throws {string} Throws error description
*/
module.exports = key => {
  if (!keys.keyboard.hasOwnProperty(key))
    throw Error(constants.error.INVALID_KEYBOARD_KEY);
  driver.DD_key(keys.keyboard[key], keys.keyboard.PRESS);
  return true;
};
