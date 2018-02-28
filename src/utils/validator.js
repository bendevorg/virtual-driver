/**
 * Module of validation functions
 * @module utils/validator
*/

const regex = require('./regex');
const constants = require('./constants');

/**
 * Validate if the input is a valid not empty string
 *
 * @param {string} stringToValidate - String to be validated
 * @return {boolean} - True case the string is valid and false if it is not
*/
exports.isValidString = stringToValidate => {
  return typeof stringToValidate === 'string' && stringToValidate.trim().length > 0;
};

/**
 * Validate if the input is a valid integer
 * @param {string} integerToValidate - Integer to be validated
 * @return {boolean} - True case the integer is valid and false if it is not
*/
exports.isValidInteger = integerToValidate => {
  return regex.integer.test(integerToValidate) 
    && parseInt(integerToValidate) <= Number.MAX_SAFE_INTEGER 
    && parseInt(integerToValidate) >= Number.MIN_SAFE_INTEGER;
};

/**
 * Validate if the input is a valid integer
 * @param {string} integerToValidate - Integer to be validated
 * @return {boolean} - True case the integer is valid and false if it is not
*/
exports.isValidScreenPosition = (x, y) => {
  return (x >= 0 && x <= constants.os.SCREEN_WIDTH) && 
    (y >= 0 && y <= constants.os.SCREEN_HEIGHT);
};