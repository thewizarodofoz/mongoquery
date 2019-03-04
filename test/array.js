const mongoquery = require('../src');

const mockCollection = [
    {a: [1, 2, 3, 4], b: 1},
    {a: [1, 2]},
];

test('$size', () => {
    const results = mongoquery({a: {$size: 2}}, mockCollection);
    expect(results).toEqual([{a: [1, 2]}]);
});

test('$all', () => {
    const results = mongoquery({a: {$all: [1, 2, 3]}}, mockCollection);
    expect(results).toEqual([{a: [1, 2, 3, 4], b: 1}]);
});

test('$all - throws because value is not an array', () => {
    const throwing = () => mongoquery({a: {$all: 2}}, mockCollection);
    expect(throwing).toThrow('expects an array');
});

test('$all - throws because field is not an array', () => {
    const throwing = () => mongoquery({b: {$all: [1, 2]}}, mockCollection);
    expect(throwing).toThrow('expects an array');
});