const httpCollect = require('./http-collect');

const juggling = (...urls) => {
  const storage = {
    dataArray: [],
    doneCount: 0,
    total: urls.length,
  };

  urls.forEach((url, index) => httpCollect(url, storage, index));
};

module.exports = juggling;
