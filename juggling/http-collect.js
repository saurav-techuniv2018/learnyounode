const http = require('http');

const httpCollect = (url, storage, id) => {
  http.get(url, (response) => {
    response
      .on('data', (chunk) => {
        const storageArray = storage.dataArray;
        if (storageArray[id] === undefined) {
          storageArray[id] = '';
        }
        storageArray[id] += chunk.toString();
      })
      .on('end', () => {
        const storageArea = storage;
        storageArea.doneCount += 1;

        if (storageArea.doneCount === storageArea.total) {
          console.log(storageArea.dataArray.join('\n'));
        }
      });
  });
};

module.exports = httpCollect;
