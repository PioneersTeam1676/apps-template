module.exports = (filename) => {
	const path = require('path');
	const file = path.basename(filename);
	const obj = file.substring(0, file.indexOf('.'));
	
	const pi = {
    obj: obj
  };

  return pi;
}