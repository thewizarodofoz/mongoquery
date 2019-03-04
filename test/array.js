const qson = require('../src/qson');

const mockCollection = [
    {a: [1, 2, 3, 4], b: 1},
    {a: [1, 2]},
];

test('$size', () => {
    const results = qson({a: {$size: 2}}, mockCollection);
    expect(results).toEqual([{a: [1, 2]}]);
});

test('$all', () => {
    const results = qson({a: {$all: [1, 2, 3]}}, mockCollection);
    expect(results).toEqual([{a: [1, 2, 3, 4], b: 1}]);
});

test('$all - throws because value is not an array', () => {
    const throwing = () => qson({a: {$all: 2}}, mockCollection);
    expect(throwing).toThrow('expects an array');
});

test('$all - throws because field is not an array', () => {
    const throwing = () => qson({b: {$all: [1, 2]}}, mockCollection);
    expect(throwing).toThrow('expects an array');
});