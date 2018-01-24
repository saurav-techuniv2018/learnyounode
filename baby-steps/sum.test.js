const sum = require('./sum');

describe(sum.name, () => {
  describe('should return 0', () => {
    test('when empty array is passed', () => {
      expect(sum([])).toBe(0);
    });
  });
  describe('should return sum', () => {
    test('when input array contains only positive values', () => {
      expect(sum([1, 2, 4, 8])).toBe(15);
    });
    test('when input array contains both positive and negative values', () => {
      expect(sum([1, 2, -4, 8])).toBe(7);
    });
    test('when input array contains only integers and floating point values', () => {
      expect(sum([1, 2, 3.5, 4, 8])).toBe(18.5);
    });
  });
});
