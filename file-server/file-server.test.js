const server = require('./file-server');
const supertest = require('supertest');

describe('server', () => {
  describe('should return file contents', () => {
    test('when valid file path is passed', () => {
      supertest(server('sample-files/input2.txt'))
        .get('/')
        .end((err, response) => {
          expect(response.text === '1\n2\n3\n4\n5\nhello\nworld\nendOfFile\n');
        });
    });
  });
  // TODO Add test that checks for error when invalid file path is passed
});

