const test = require('ava');
const qson = require('../src/qson');

const mockCollection = [
    {a: 4},
    {a: 1},
    {a: 2},
];

test('$eq', (t) => {
    const results = qson({a: {$eq: 1}}, mockCollection);
    t.deepEqual(results, [{a: 1}]);
});

test('$eq - implicit', (t) => {
    const results = qson({a: 1}, mockCollection);
    t.deepEqual(results, [{a: 1}]);
});

test('$gt', (t) => {
    const results = qson({a: {$gt: 1}}, mockCollection);
    t.deepEqual(results, [{a: 4}, {a: 2}]);
});

test('$gte', (t) => {
    const results = qson({a: {$gte: 2}}, mockCollection);
    t.deepEqual(results, [{a: 4}, {a: 2}]);
});

test('$in', (t) => {
    const results = qson({a: {$in: [2, 4]}}, mockCollection);
    t.deepEqual(results, [{a: 4}, {a: 2}]);
});

test('$in throws', (t) => {
    const throwing = () => qson({a: {$in: 2}}, mockCollection);
    t.throws(throwing);
});

test('$lt', (t) => {
    const results = qson({a: {$lt: 4}}, mockCollection);
    t.deepEqual(results, [{a: 1}, {a: 2}]);
});

test('$lte', (t) => {
    const results = qson({a: {$lte: 2}}, mockCollection);
    t.deepEqual(results, [{a: 1}, {a: 2}]);
});

test('$ne', (t) => {
    const results = qson({a: {$ne: 2}}, mockCollection);
    t.deepEqual(results, [{a: 4}, {a: 1}]);
});

test('$nin', (t) => {
    const results = qson({a: {$nin: [2, 4]}}, mockCollection);
    t.deepEqual(results, [{a: 1}]);
});

test('$nin throws', (t) => {
    const throwing = () => qson({a: {$nin: 2}}, mockCollection);
    t.throws(throwing);
});