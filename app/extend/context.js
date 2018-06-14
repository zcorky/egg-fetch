'use strict';

const fetch = require('node-fetch');

module.exports = {
  fetch(...args) {
    return fetch.call(null, ...args);
  },
};
