const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

// uses mock data from ../lib/__mocks__/Potion
jest.mock('../lib/Potion');
// console.log(new Potion());

test('create a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

test('get player stats as an object', () => {
    const player = new Player('Bjorn');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('get inventory from player or returns false', () => {
    const player = new Player('Gustav');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

test('get player health value', () => {
    const player = new Player('Gunter');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test('checks whether or not player is alive', () => {
    const player = new Player('Sven');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
});

test('subtract from player hp', () => {
    const player = new Player('Fritz');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});