/*!
 * virtual-driver
 * Copyright(c) 2018-2019 Guilherme Conti Teixeira
 * MIT Licensed
*/

let virtualDriver = {};
const featuresPath = process.cwd() + '/src/';
const fs = require('fs');

fs.readdirSync(featuresPath).forEach(file => {
  if (file.indexOf('.js') !== -1){
    virtualDriver[file.split('.')[0]] = require(featuresPath + file);
  }
});

module.exports = virtualDriver;
