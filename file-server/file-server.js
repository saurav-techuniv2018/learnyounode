const fs = require('fs');
const http = require('http');

const fileServer = filePath => http.createServer((request, response) => {
  const fileReadStream = fs.createReadStream(filePath);
  fileReadStream.pipe(response);
});

module.exports = fileServer;
