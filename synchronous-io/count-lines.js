const fs = require('fs');

const countLines = (fileName) => {
  try {
    const data = fs.readFileSync(fileName, 'utf-8');

    const newLines = data.split('').filter(character =>
      character === '\n');
    const count = newLines.length;
    return count + 1;
  } catch (err) {
    return undefined;
  }
};

module.exports = countLines;

console.log(countLines(process.argv[2]));
