const fill = require('./fill');

describe('fill', () => {
  describe('should return input number as string', () => {
    test('when input is more than ten', () => {
      expect(fill(10)).toBe('10');
    });
    test('when input is less than zero', () => {
      expect(fill(-2)).toBe('-2');
    });
    describe('should return number with leading 0', () => {
      test('when input is more than ten', () => {
        expect(fill(4)).toBe('04');
      });
    });
  });
});

