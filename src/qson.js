const OPERATORS = require('./operators');
const {isObject} = require('./utils');

function getOperator(key, throwOnNotFound = true) {
    const operator = OPERATORS[key];

    if (!operator && throwOnNotFound) {
        throw new Error('no such operator ' + key);
    }

    return operator;
}

function isOperator(thing) {
    return thing[0] === '$';
}

function isMatch(expected, actual) {
    // handle implicit $eq
    if (!isObject(expected)) {
        expected = {$eq: expected};
    }

    const expectedKeys = Object.keys(expected);

    for (let key of expectedKeys) {

        if (isOperator(key)) {
            const operator = getOperator(key);
            if (!operator(expected[key], actual, isMatch)) {
                return false;
            }
        } else {
            if (!isMatch(expected[key], actual[key])) {
                return false;
            }
        }
    }

    return true;
}

function qson(query, collection) {
    const results = [];

    for (let item of collection) {
        if (!isMatch(query, item)) {
            continue;
        }

        results.push(item);
    }

    return results;
}

module.exports = qson;