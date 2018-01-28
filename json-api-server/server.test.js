const server = require('./server');
const supertest = require('supertest');

describe('server', () => {
  describe('should return a 400 statusCode', () => {
    test('when request method is not GET', (done) => {
      supertest(server)
        .post('/')
        .end((err, response) => {
          expect(response.statusCode).toBe(400);
          done();
        });
    });
  });
  describe('should return hour, minute and second', () => {
    test('when a get request is made to /api/parsetime', (done) => {
      const dateString = '2018-01-28T13:17:52.000Z';

      supertest(server)
        .get(`/api/parsetime?iso=${dateString}`)
        .set('Accept', 'application/json')
        .end((err, response) => {
          expect(JSON.parse(response.text)).toEqual({
            hour: 18,
            minute: 47,
            second: 52,
          });
          done();
        });
    });
  });
  describe('should return unixtime', () => {
    test('when a get request is made to /api/unixtime', (done) => {
      const dateString = '2018-01-28T13:17:52.000Z';

      supertest(server)
        .get(`/api/unixtime?iso=${dateString}`)
        .set('Accept', 'application/json')
        .end((err, response) => {
          expect(JSON.parse(response.text)).toEqual({
            unixtime: 1517145472000,
          });
          done();
        });
    });
  });
});
