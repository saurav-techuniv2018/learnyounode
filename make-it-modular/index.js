const ls = require('./ls');

ls(process.argv[2], process.argv[3], (err, files) => {
  if (err) { return; }
  files.forEach(file => console.log(file));
});

