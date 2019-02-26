const test = require('ava');
const qson = require('../src/qson');

const mockCollection = [
    {a: [1, 2, 3], b: 1},
    {a: [1, 2]},
];

test('$size', (t) => {
    const results = qson({a: {$size: 2}}, mockCollection);
    t.deepEqual(results, [{a: [1, 2]}]);
});

test('$all', (t) => {
    const results = qson({a: {$all: [1, 2]}}, mockCollection);
    t.deepEqual(results, [{a: [1, 2, 3], b: 1}, {a: [1, 2]}]);
});

test('$all - throws because value is not an array', (t) => {
    const throwing = () => qson({a: {$all: 2}}, mockCollection);
    t.throws(throwing);
});

test('$all - throws because field is not an array', (t) => {
    const throwing = () => qson({b: {$all: [1, 2]}}, mockCollection);
    t.throws(throwing);
});