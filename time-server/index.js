const timeServer = require('./time-server');

const port = parseInt(process.argv[2], 10);
timeServer.listen(port);
