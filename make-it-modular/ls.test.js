const ls = require('./ls');

describe(ls.name, () => {
  // Add test to check if the callback is called with an error

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
        expect(mockFunction).toHaveBeenCalledWith(null, ['Test.md']);
        done();
      });
      ls('sample-files', 'md', mockFunction);
    });
    test('when extension is passed with leading period', (done) => {
      const mockFunction = jest.fn(() => {
        expect(mockFunction).toHaveBeenCalledWith(null, ['input1.txt', 'input2.txt']);
        done();
      });

      ls('sample-files', '.txt', mockFunction);
    });
  });
});
