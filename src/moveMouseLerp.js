/**
 * Module to mouve a mouse in a lerp motion
 * @module src/moveMouseLerp
*/

const os = require('os-data');
const moveMouse = require('./moveMouse');
const constants = require('./utils/constants');

/**
 * Move mouse to a point [x,y] in the screen using lerp
 * @param {int} x Point in X axis to move the cursor to.
 * @param {int} y Point in Y axis to move the cursor to.
 * @return {boolean} A boolean telling if the input was successfully sent.
 * @throws {string} Throws error description
*/

function moveMouseLerp(x, y) {
  os.mousePosition()
    .then(mousePosition => {
      if (mousePosition.x == x && mousePosition.y == y) {
        return setTimeout(() => {
          return true;
        }, constants.input.HUMAN_TIME_SIMULATION);
      }
      let directionX = Math.sign(x - mousePosition.x);
      let nextXPosition = mousePosition.x + (directionX * constants.input.PIXELS_PER_TICK);
      if (directionX > 0){
        nextXPosition = Math.abs(nextXPosition) > Math.abs(x)?x:nextXPosition;
      } else {
        nextXPosition = Math.abs(nextXPosition) < Math.abs(x)?x:nextXPosition;
      }
    
      let directionY = Math.sign(y - mousePosition.y);
      let nextYPosition = mousePosition.y + (directionY * constants.input.PIXELS_PER_TICK);
      if (directionY > 0){
        nextYPosition = Math.abs(nextYPosition) > Math.abs(y)?y:nextYPosition;
      } else {
        nextYPosition = Math.abs(nextYPosition) < Math.abs(y)?y:nextYPosition;
      }
      moveMouse(nextXPosition, nextYPosition);
      return this.moveMouseLerp(x, y);
    })
    .catch(err => {
      throw Error(constants.error.UNEXPECTED_DRIVER_ERROR);
    });
}

module.exports = moveMouseLerp;
