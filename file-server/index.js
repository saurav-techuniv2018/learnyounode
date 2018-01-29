const fileServer = require('./file-server');

const server = fileServer(parseInt(process.argv[2], 10));

server.listen(process.argv[3]);
