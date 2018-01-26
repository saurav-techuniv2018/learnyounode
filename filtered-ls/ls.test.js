const ls = require('./ls');

describe(ls.name, () => {
  describe('should return undefined', () => {
    test('when error occurs (like invalid directory)', (done) => {
      const callback = (result) => {
        expect(result).toBe(undefined);
        done();
      };

      ls('invalid-dir', 'txt', callback);
    });
  });

  describe('should call the callback', () => {
    test('when the directory is read', (done) => {
      const mockFunction = jest.fn(() => {
        expect(mockFunction.mock.calls.length).toBe(1);
        done();
      });

      ls('sample-files', 'txt', mockFunction);
    });
  });

  describe('should call the callback with right argument', () => {
    test('i.e. with the array of file names', (done) => {
      const mockFunction = jest.fn(() => {
        expect(mockFunction).toHaveBeenCalledWith(['Test.md']);
        done();
      });
      ls('sample-files', 'md', mockFunction);
    });
    test('when extension is passed with leading period', (done) => {
      const mockFunction = jest.fn(() => {
        expect(mockFunction).toHaveBeenCalledWith(['input1.txt', 'input2.txt']);
        done();
      });

      ls('sample-files', '.txt', mockFunction);
    });
  });
});
