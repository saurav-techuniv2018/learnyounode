const sum = numbers => numbers.reduce((result, currentValue) => {
  let temporarySum = result;
  temporarySum += currentValue;
  return temporarySum;
}, 0);

module.exports = sum;
