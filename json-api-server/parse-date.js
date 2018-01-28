const parseDate = (dateString) => {
  if (typeof dateString !== 'string') {
    return undefined;
  }

  const dateObject = new Date(dateString);

  if (dateObject.toString() === 'Invalid Date') {
    return undefined;
  }

  return {
    hour: dateObject.getHours(),
    minute: dateObject.getMinutes(),
    second: dateObject.getSeconds(),
  };
};

module.exports = parseDate;
