/**
 * Module to send a key
 * @module src/keySend
*/

const keyPress = require('./keyPress');
const keyRelease = require('./keyRelease');
const constants = require('./utils/constants');

/**
 * Keyboard key click
 * @param {int} key Key to be clicked.
 * @return {boolean} A boolean telling if the input was successfully sent.
 * @throws {string} Throws error description
*/
module.exports = key => {
  keyPress(key);
  setTimeout(() => {
    keyRelease(key)
    return true;
  }, constants.input.HUMAN_TIME_REACTION_MIN);
};
