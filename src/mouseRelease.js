/**
 * Module to release a mouse button
 * @module src/mouseRelease
*/

const keys = require('./utils/keys');
const driver = require('./driver/driver');
const constants = require('./utils/constants');

/**
 * Mouse button release
 * @param {int} button Button to be released.
 * @return {boolean} A boolean telling if the input was successfully sent.
 * @throws {string} Throws error description
*/
module.exports = button => {
  if (!keys.mouse.release.hasOwnProperty(button))
    throw Error(constants.error.INVALID_MOUSE_BUTTON);
  driver.DD_btn(keys.mouse.release[button]);
  return true;
};
