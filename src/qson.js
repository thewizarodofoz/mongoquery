const OPERATORS = require('./operators');
const { isObject } = require('./utils');

function getOperator(key, throwOnNotFound = true) {
    const operator = OPERATORS[key];

    if (!operator && throwOnNotFound) {
        throw new Error('no such operator ' + key);
    }

    return operator;
}

function isMatch(query, item) {
    const filterKeys = Object.keys(query);

    for (let filterKey of filterKeys) {
        // check for top level logical operators
        const operatorFn = getOperator(filterKey, false);
        if (operatorFn) {
            return operatorFn(query[filterKey], item, isMatch);
        }

        // check for operator values which are not objects - they are implicit $eq
        if (!isObject(query[filterKey])) {
            query[filterKey] = {$eq: query[filterKey]};
        }

        const operatorKeys = Object.keys(query[filterKey]);

        for (let operatorKey of operatorKeys) {
            const operatorFn = getOperator(operatorKey);
            const expectedValue = query[filterKey][operatorKey];
            const actualValue = item[filterKey];

            const operatorResult = operatorFn(expectedValue, actualValue, isMatch);

            if (!operatorResult) {
                return false;
            }
        }
    }

    return true;
}

function qson(query = {}, collection = []) {
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