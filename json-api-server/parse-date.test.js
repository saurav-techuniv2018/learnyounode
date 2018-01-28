const parseDate = require('./parse-date');

describe(parseDate.name, () => {
  describe('should return undefined', () => {
    test('when input is not a string', () => {
      expect(parseDate(2018)).toBe(undefined);
    });
    test('when date cannot be parsed', () => {
      expect(parseDate('today')).toBe(undefined);
    });
  });

  describe('should return an object, with hour, minute and second properties ', () => {
    test('when a valid date string is passed', () => {
      const dateString = '2018-01-28T13:20:30.291Z';
      const resultDateObject = parseDate(dateString);
      expect(resultDateObject).toHaveProperty('hour');
      expect(resultDateObject).toHaveProperty('minute');
      expect(resultDateObject).toHaveProperty('second');
    });
  });
  describe('should return with right values', () => {
    test('when a valid date string is passed', () => {
      expect(parseDate('2018-1-28 18:47:52'))
        .toEqual({
          hour: 18,
          minute: 47,
          second: 52,
        });
    });
  });
});
