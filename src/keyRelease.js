/**
 * Module to release a key
 * @module src/keyRelease
*/

const driver = require('./driver/driver');
const keys = require('./utils/keys');
const constants = require('./utils/constants');

/**
 * Keyboard key release
 * @param {int} key Key to be released.
 * @return {boolean} A boolean telling if the input was successfully sent.
 * @throws {string} Throws error description
*/
module.exports = key => {
  if (!keys.keyboard.hasOwnProperty(key))
    throw Error(constants.error.INVALID_KEYBOARD_KEY);
  driver.DD_key(keys.keyboard[key], keys.keyboard.RELEASE);
  return true;
};
