const server = require('./server');
const supertest = require('supertest');

describe('server', () => {
  describe('should return empty string', () => {
    test('when request body is empty', (done) => {
      supertest(server)
        .post('/')
        .send('')
        .end((error, response) => {
          expect(response.text).toBe('');
          done();
        });
    });

    test('when request is not a POST REQUEST', () => {
      supertest(server)
        .get('/')
        .send('get request')
        .end((error, response) => {
          expect(response.statusCode).toBe(400);
        });
    });
  });
  describe('should return input string converted to upper case', () => {
    test('when input different types of symbols', (done) => {
      supertest(server)
        .post('/')
        .send('This is the 2nd test, should pass.')
        .end((err, response) => {
          expect(response.text).toBe('THIS IS THE 2ND TEST, SHOULD PASS.');
          done();
        });
    });
  });
});
