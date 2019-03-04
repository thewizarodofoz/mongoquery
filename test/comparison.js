const mongoquery = require('../src');

const mockCollection = [
    {a: 4},
    {a: 1},
    {a: 2},
];

test('$eq', () => {
    const results = mongoquery({a: {$eq: 1}}, mockCollection);
    expect(results).toEqual([{a: 1}]);
});

test('$eq - implicit', () => {
    const results = mongoquery({a: 1}, mockCollection);
    expect(results).toEqual([{a: 1}]);
});

test('$gt', () => {
    const results = mongoquery({a: {$gt: 1}}, mockCollection);
    expect(results).toEqual([{a: 4}, {a: 2}]);
});

test('$gte', () => {
    const results = mongoquery({a: {$gte: 2}}, mockCollection);
    expect(results).toEqual([{a: 4}, {a: 2}]);
});

test('$in', () => {
    const results = mongoquery({a: {$in: [2, 4]}}, mockCollection);
    expect(results).toEqual([{a: 4}, {a: 2}]);
});

test('$in throws', () => {
    const throwing = () => mongoquery({a: {$in: 2}}, mockCollection);
    expect(throwing).toThrow('expects an array');
});

test('$lt', () => {
    const results = mongoquery({a: {$lt: 4}}, mockCollection);
    expect(results).toEqual([{a: 1}, {a: 2}]);
});

test('$lte', () => {
    const results = mongoquery({a: {$lte: 2}}, mockCollection);
    expect(results).toEqual([{a: 1}, {a: 2}]);
});

test('$ne', () => {
    const results = mongoquery({a: {$ne: 2}}, mockCollection);
    expect(results).toEqual([{a: 4}, {a: 1}]);
});

test('$nin', () => {
    const results = mongoquery({a: {$nin: [2, 4]}}, mockCollection);
    expect(results).toEqual([{a: 1}]);
});

test('$nin throws', () => {
    const throwing = () => mongoquery({a: {$nin: 2}}, mockCollection);
    expect(throwing).toThrow('expects an array');
});