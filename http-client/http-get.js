const http = require('http');

const httpGet = (url) => {
  http.get(url, (response) => {
    response.setEncoding('utf-8')
      .on('error', console.error)
      .on('data', console.log);
  })
    .on('error', console.error);
};

module.exports = httpGet;
