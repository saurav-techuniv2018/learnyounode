const countLines = require('./count-lines');

describe(countLines.name, () => {
  describe('should return undefined', () => {
    test('if an error occurs', () => {
      expect(countLines('invalidFileName.txt'));
    });
  });
  describe('should return number of lines', () => {
    test('if valid file name is passed', () => {
      expect(countLines('sample-files/input1.txt')).toBe(10);
    });
  });
});
