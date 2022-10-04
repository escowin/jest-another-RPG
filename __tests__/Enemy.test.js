const Enemy = require('../lib/Enemy');
const Potion = require('../lib/Potion');

// mock data
jest.mock('../lib/Potion');

test('create an enemy object', () => {
    const enemy = new Enemy('Dio', 'za warudo');

    expect(enemy.name).toBe('Dio');
    expect(enemy.weapon).toBe('za warudo');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});