const test = require('ava');
const qson = require('../src/qson');

const mockCollection = [
    {a: 1},
    {a: 2},
    {a: 4},
    {b: 1},
];

test('$and', (t) => {
    const results = qson({$and: [{a: {$gt: 1}}, {a: {$lt: 4}}]}, mockCollection);
    t.deepEqual(results, [{a: 2}]);
});

test('$or', (t) => {
    const results = qson({$or: [{a: {$gt: 3}}, {b: {$eq: 1}}]}, mockCollection);
    t.deepEqual(results, [{a: 4}, {b: 1}]);
});

test('$nor', (t) => {
    const results = qson({$nor: [{a: {$eq: 1}}, {b: {$eq: 1}}]}, mockCollection);
    t.deepEqual(results, [{a: 2}, {a: 4}]);
});