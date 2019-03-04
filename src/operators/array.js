function $size(expected, actual) {
    return actual.length === expected;
}

function $all(expected, actual) {
    if (!Array.isArray(expected)) {
        throw new TypeError('$all expects an array as an expected value');
    }

    if (!Array.isArray(actual)) {
        throw new TypeError('$all expects an array as an actual value');
    }

    for (let item of expected) {
        // TODO: for large arrays this is will be a performance issue
        if (actual.indexOf(item) === -1) {
            return false;
        }
    }

    return true;
}

module.exports = {
    $size,
    $all,
};