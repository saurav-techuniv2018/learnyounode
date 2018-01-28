const net = require('net');

const fill = (itemToFill, desiredLength) => {
  let result = '';
  if (itemToFill.toString().length < desiredLength) {
    result = `${'0'.repeat(desiredLength - itemToFill.toString().length)}${itemToFill}`;
  }
  return result;
};

const timeServer = net.createServer((socket) => {
  const currentDate = new Date(Date.now());

  const year = currentDate.getFullYear();
  const month = fill((currentDate.getMonth() + 1).toString(), 2);
  const day = fill((currentDate.getDate()).toString(), 2);

  const hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  if (minutes.toString().length === 1) { minutes = `0${minutes}`; }

  socket.end(`${year}-${month}-${day} ${hour}:${minutes}\n`);
});

module.exports = timeServer;
