/**
 * Module to move mouse
 * @module src/moveMouse
*/

const driver = require('./driver/driver');
const validator = require('./utils/validator');
const constants = require('./utils/constants');

/**
 * Move mouse to a point [x,y] in the screen
 * @param {int} x Point in X axis to move the cursor to.
 * @param {int} y Point in Y axis to move the cursor to.
 * @return {boolean} A boolean telling if the input was successfully sent.
 * @throws {string} Throws error description
*/
module.exports = (x, y) => {
  if (!validator.isValidInteger(x))
    throw Error(constants.error.INVALID_X);
  if (!validator.isValidInteger(y))
    throw Error(constants.error.INVALID_Y);
  if (!validator.isValidScreenPosition(x, y))
    throw Error(constants.error.INVALID_SCREEN_POSITION);
  driver.DD_mov(x, y);
  return true;
};
