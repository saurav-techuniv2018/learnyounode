const unixTime = require('./unix-time');

describe(unixTime.name, () => {
  describe('should return undefined', () => {
    test('when input is not a string', () => {
      expect(unixTime(2018)).toBe(undefined);
    });
    test('when date cannot be parsed', () => {
      expect(unixTime('today')).toBe(undefined);
    });
  });

  describe('should return an object, with unixtime property ', () => {
    test('when a valid date string is passed', () => {
      const dateString = '2018-01-28T13:20:30.291Z';
      const resultDateObject = unixTime(dateString);
      expect(resultDateObject).toHaveProperty('unixtime');
    });
  });
  describe('should return with right values', () => {
    test('when a valid date string is passed', () => {
      expect(unixTime('2018-1-28 18:47:52'))
        .toEqual({
          unixtime: 1517145472000,
        });
    });
  });
});

