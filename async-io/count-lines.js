const fs = require('fs');

const countLines = (fileName, callbackFunction) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      callbackFunction(undefined);
      return;
    }

    const characters = data.split('');

    const linesCount = characters.filter(character => character === '\n').length + 1;

    callbackFunction(linesCount);
  });
};

module.exports = countLines;
