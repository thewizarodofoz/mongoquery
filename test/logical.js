const qson = require('../src/qson');

const mockCollection = [
    {a: 1},
    {a: 2},
    {a: 4},
    {b: 1},
];

test('$and', () => {
    const results = qson({$and: [{a: {$gt: 1}}, {a: {$lt: 4}}]}, mockCollection);
    expect(results).toEqual([{a: 2}]);
});

test('$or', () => {
    const results = qson({$or: [{a: {$gt: 3}}, {b: {$eq: 1}}]}, mockCollection);
    expect(results).toEqual([{a: 4}, {b: 1}]);
});

test('$nor', () => {
    const results = qson({$nor: [{a: {$eq: 1}}, {b: {$eq: 1}}]}, mockCollection);
    expect(results).toEqual([{a: 2}, {a: 4}]);
});