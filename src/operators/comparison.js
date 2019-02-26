function $eq(expected, actual) {
    return actual === expected;
}

function $gt(expected, actual) {
    return actual > expected;
}

function $gte(expected, actual) {
    return actual >= expected;
}

function $in(expected, actual) {
    if (!Array.isArray(expected)) {
        throw new TypeError('$in operator expects an array as a value')
    }
    return expected.indexOf(actual) > -1;
}

function $lt(expected, actual) {
    return actual < expected;
}

function $lte(expected, actual) {
    return actual <= expected;
}

function $ne(expected, actual) {
    return actual !== expected;
}

function $nin(expected, actual) {
    if (!Array.isArray(expected)) {
        throw new TypeError('$nin operator expects an array as a value')
    }
    return expected.indexOf(actual) === -1;
}

module.exports = {
    $eq,
    $gt,
    $gte,
    $in,
    $lt,
    $lte,
    $ne,
    $nin,
};