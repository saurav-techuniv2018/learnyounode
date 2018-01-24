const countLines = require('./count-lines');

describe(countLines.name, () => {
  describe('should return undefined', () => {
    test('when an IO error occurs', (done) => {
      const callback = (result) => {
        expect(result).toBe(undefined);
        done();
      };

      countLines('invalidFileName', callback);
    });
  });

  describe('should call the callback', () => {
    test('when the file is read', (done) => {
      const mockFunction = jest.fn(() => {
        expect(mockFunction.mock.calls.length).toBe(1);
        done();
      });

      countLines('sample-files/input1.txt', mockFunction);
    });
  });

  describe('should call the callback with right argument', () => {
    test('i.e. with the number of lines in the input file', (done) => {
      const mockFunction = jest.fn(() => {
        expect(mockFunction).toHaveBeenCalledWith(10);
        done();
      });
      countLines('sample-files/input1.txt', mockFunction);
    });
  });
});
