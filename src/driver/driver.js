/**
 * Virtual driver to manipulate mouse and keyboard events
 * @module utils/driver
*/

const ffi = require('ffi');
const driverPath = 'driver/vd64.dll';

//  Import our virtual driver with functions
const driver = ffi.Library(driverPath, {
  'DD_btn': ['void', ['int']],
  'DD_mov': ['void', ['int', 'int']],
  'DD_movR': ['void', ['int', 'int']],
  'DD_whl': ['void', ['int']],
  'DD_key': ['void', ['int', 'int']],
  'DD_str': ['void', ['string']]
});

module.exports = driver;
