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

test('get enemy health value', () => {
    const enemy = new Enemy('Pet Shop', 'horus');

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test('checks whether or not enemy is alive', () => {
    const enemy = new Enemy('Oingo', 'khnum');

    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;

    expect(enemy.isAlive()).toBeFalsy();
});

test('get enemy attack value', () => {
    const enemy = new Enemy('Vanilla Ice', 'Cream');
    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test('subtract from enemy hp', () => {
    const enemy = new Enemy('Kira', 'Killer Queen');
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

    expect(enemy.health).toBe(oldHealth - 5);

    enemy.reduceHealth(99999);

    expect(enemy.health).toBe(0);
});

test('gets a description of the enemy', () => {
    const enemy = new Enemy('Iggy', 'the fool');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('Iggy'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('the fool'));
});