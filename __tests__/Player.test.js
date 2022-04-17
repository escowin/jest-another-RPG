const { expect, test } = require('@jest/globals');
const exp = require('constants');
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');
console.log(new Potion());

// GitHub issue | want players to have a name and three number properties: health, strength, and agility. Write test that checks for the existence of those four things.

test('creates a player object', () => {
    const player = new Player('dave');

    expect(player.name).toBe('dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});

test("get player stats as an object", () => {
    const player = new Player('dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('get inventory from player or returns false', () => {
    const player = new Player('dave');

    expect(player.getInventory()).toEqual(expect.any(Array));
    player.inventory = [];
    expect(player.getInventory()).toEqual(false);
});