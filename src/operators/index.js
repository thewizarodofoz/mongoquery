const comparison = require('./comparison');
const logical = require('./logical');
const array = require('./array');

module.exports = {
    ...comparison,
    ...logical,
    ...array,
};