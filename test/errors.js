const mongoquery = require('../src');

const mockCollection = [
    {a: 1}
];

test('unknown operator', () => {
    const throwing = () => mongoquery({a: {$wow: 4}}, mockCollection);
    expect(throwing).toThrow('no such operator');
});