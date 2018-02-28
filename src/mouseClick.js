/**
 * Module to press a mouse button
 * @module src/mouseClick
*/

const mousePress = require('./mousePress');
const mouseRelease = require('./mouseRelease');
const constants = require('./utils/constants');

/**
 * Mouse click
 * @param {int} button Button to be clicked.
 * @return {boolean} A boolean telling if the input was successfully sent.
 * @throws {string} Throws error description
*/
module.exports = button => {
  mousePress(button);
  setTimeout(() => {
    mouseRelease(button);
    return true;
  }, constants.input.HUMAN_TIME_REACTION_MIN);
};
