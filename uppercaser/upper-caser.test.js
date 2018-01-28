const upperCaser = require('./upper-caser');

describe(upperCaser.name, () => {
  describe('should return undefined', () => {
    test('when input is not a string', () => {
      expect(upperCaser(null)).toBe(undefined);
    });
  });
  describe('should return an empty string', () => {
    test('when input is an empty string', () => {
      expect(upperCaser('')).toBe('');
    });
  });

  describe('should return the upper cased string', () => {
    test('when input contains only upper cased letters', () => {
      expect(upperCaser('A sample string & numbers - 123'))
        .toBe('A SAMPLE STRING & NUMBERS - 123');
    });
  });
});
