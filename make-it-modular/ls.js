const fs = require('fs');

const ls = (directoryPath, extension, callback) => {
  fs.readdir(directoryPath, 'utf-8', (err, data) => {
    if (err) {
      callback(err);
      return;
    }

    const fileExtension = extension.replace(/^\.+/, '');
    const files = data.filter(file => file.endsWith(`.${fileExtension}`));
    callback(null, files);
  });
};

module.exports = ls;
