const http = require('http');
const upperCaser = require('./upper-caser');
const bl = require('bl');

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    request.pipe(bl((err, data) => {
      const upperCasedData = upperCaser(data.toString());
      response.end(upperCasedData);
    }));
  } else {
    response.statusCode = 400;
    response.end();
  }
});

module.exports = server;
