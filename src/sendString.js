 /**
 * Module to send a full string
 * @module src/sendString
*/

const driver = require('./driver/driver');
const validator = require('./utils/validator');
const constants = require('./utils/constants');
 
/**
 * Type a full string
 * @param {string} stringToSend String to be typed.
 * @return {boolean} A boolean telling if the input was successfully sent.
 * @throws {string} Throws error description
*/
module.exports = stringToSend => {
  if (!validator.isValidString(stringToSend))
    throw Error(constants.messages.error.INVALID_STRING);
  driver.DD_str(stringToSend);
  return true;
};
