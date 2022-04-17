const { expect } = require('@jest/globals');
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