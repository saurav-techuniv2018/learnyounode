const http = require('http');

const httpCollect = (url) => {
  let data = '';
  http.get(url, (response) => {
    response
      .on('data', (chunk) => { data += chunk.toString(); })
      .on('end', () => {
        console.log(data.length);
        console.log(data);
      });
  });
};

module.exports = httpCollect;
