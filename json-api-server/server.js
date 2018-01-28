const http = require('http');
const parseTime = require('./parse-date');
const unixTime = require('./unix-time');
const urlParser = require('url');

const server = http.createServer((request, response) => {
  const parsedUrl = urlParser.parse(request.url);

  // Get the pathname removing the slash character
  const methodKey = parsedUrl.pathname;

  const router = {
    '/api/parsetime': parseTime,
    '/api/unixtime': unixTime,
  };

  const route = router[methodKey];

  if (route !== undefined && request.method === 'GET') {
    const query = parsedUrl.query.split('=')[1];

    const result = route(query);
    if (result !== undefined) {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(result));
      response.end();
      return;
    }
  }

  response.writeHead(400);
  response.end();
});

module.exports = server;
