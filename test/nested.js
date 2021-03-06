const mongoquery = require('../src');

const mockCollection = [
    {a: {b: {c: 1, d: 4}}},
    {a: {b: {c: 2, d: 4}}},
    {a: {b: {c: 3, d: 4}}},
];

test('$gte + explicit $gt', () => {
    const results = mongoquery({a: {b: {c: {$gte: 2}, d: 4}}}, mockCollection);
    expect(results).toEqual([
        {a: {b: {c: 2, d: 4}}},
        {a: {b: {c: 3, d: 4}}},
    ]);
});