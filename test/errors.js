const qson = require('../src/qson');

const mockCollection = [
    {a: 1}
];

test('unknown operator', () => {
    const throwing = () => qson({a: {$wow: 4}}, mockCollection);
    expect(throwing).toThrow('no such operator');
});