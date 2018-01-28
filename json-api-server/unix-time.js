const unixTime = (dateString) => {
  if (typeof dateString !== 'string') {
    return undefined;
  }

  const dateObject = new Date(dateString);

  if (dateObject.toString() === 'Invalid Date') {
    return undefined;
  }

  return { unixtime: dateObject.getTime() };
};

module.exports = unixTime;
