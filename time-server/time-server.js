const net = require('net');
const fill = require('./fill');

const timeServer = net.createServer((socket) => {
  const currentDate = new Date(Date.now());

  const year = currentDate.getFullYear();
  const month = fill(currentDate.getMonth() + 1);
  const day = fill(currentDate.getDate());

  const hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  if (minutes.toString().length === 1) { minutes = `0${minutes}`; }

  socket.end(`${year}-${month}-${day} ${hour}:${minutes}\n`);
});

module.exports = timeServer;
