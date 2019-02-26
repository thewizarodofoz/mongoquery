function $size(expected, actual) {
    return actual.length === expected;
}

function $all(expected, actual) {
    if (!Array.isArray(expected)) {
        throw new TypeError('$all expects an array as a value');
    }

    if (!Array.isArray(actual)) {
        throw new TypeError('$all is only applicable to array fields');
    }

    for (let item of expected) {
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