const qson = require('../src/qson');

const mockCollection = [
    {a: 4},
    {a: 1},
    {a: 2},
];

test('$eq', () => {
    const results = qson({a: {$eq: 1}}, mockCollection);
    expect(results).toEqual([{a: 1}]);
});

test('$eq - implicit', () => {
    const results = qson({a: 1}, mockCollection);
    expect(results).toEqual([{a: 1}]);
});

test('$gt', () => {
    const results = qson({a: {$gt: 1}}, mockCollection);
    expect(results).toEqual([{a: 4}, {a: 2}]);
});

test('$gte', () => {
    const results = qson({a: {$gte: 2}}, mockCollection);
    expect(results).toEqual([{a: 4}, {a: 2}]);
});

test('$in', () => {
    const results = qson({a: {$in: [2, 4]}}, mockCollection);
    expect(results).toEqual([{a: 4}, {a: 2}]);
});

test('$in throws', () => {
    const throwing = () => qson({a: {$in: 2}}, mockCollection);
    expect(throwing).toThrow('expects an array');
});

test('$lt', () => {
    const results = qson({a: {$lt: 4}}, mockCollection);
    expect(results).toEqual([{a: 1}, {a: 2}]);
});

test('$lte', () => {
    const results = qson({a: {$lte: 2}}, mockCollection);
    expect(results).toEqual([{a: 1}, {a: 2}]);
});

test('$ne', () => {
    const results = qson({a: {$ne: 2}}, mockCollection);
    expect(results).toEqual([{a: 4}, {a: 1}]);
});

test('$nin', () => {
    const results = qson({a: {$nin: [2, 4]}}, mockCollection);
    expect(results).toEqual([{a: 1}]);
});

test('$nin throws', () => {
    const throwing = () => qson({a: {$nin: 2}}, mockCollection);
    expect(throwing).toThrow('expects an array');
});