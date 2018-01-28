const fs = require('fs');
const http = require('http');

const fileServer = (port, filePath) => {
  const server = http.createServer((request, response) => {
    const fileReadStream = fs.createReadStream(filePath);
    fileReadStream.pipe(response);
  });
  server.listen(port);
};

module.exports = fileServer;
