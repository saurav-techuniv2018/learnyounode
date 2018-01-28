const upperCaser = (inputString) => {
  if (typeof inputString !== 'string') {
    return undefined;
  }

  if (inputString.length === 0) {
    return '';
  }

  return inputString.toUpperCase();
};

module.exports = upperCaser;
