const fill = (inputNumber) => {
  if (inputNumber < 10 && inputNumber > 0) {
    return `0${inputNumber}`;
  }
  return inputNumber.toString();
};

module.exports = fill;
