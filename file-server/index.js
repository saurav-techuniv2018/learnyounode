const fileServer = require('./file-server');

fileServer(
  parseInt(process.argv[2], 10),
  process.argv[3],
);
