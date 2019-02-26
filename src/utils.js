function isObject(x) {
    return typeof x === 'object' && !Array.isArray(x) && null !== x;
}

module.exports = {
    isObject,
};