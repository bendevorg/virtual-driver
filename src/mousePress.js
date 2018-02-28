/**
 * Module to press a mouse button
 * @module src/mousePress
*/

const keys = require('./utils/keys');
const driver = require('./driver/driver');
const constants = require('./utils/constants');

/**
 * Press a mouse button
 * @param {int} button Button to be pressed.
 * @return {boolean} A boolean telling if the input was successfully sent.
 * @throws {string} Throws error description
*/
module.exports = button => {
  if (!keys.mouse.press.hasOwnProperty(button))
    throw Error(constants.error.INVALID_MOUSE_BUTTON);
  driver.DD_btn(keys.mouse.press[button]);
  return true;
};
