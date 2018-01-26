const ls = require('./ls');

ls(process.argv[2], process.argv[3], (files) => {
  files.forEach(file => console.log(file));
});

