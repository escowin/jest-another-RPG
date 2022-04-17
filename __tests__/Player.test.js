const { test, expect } = require('@jest/globals');
const Player = require('../lib/Player');

// GitHub issue | want players to have a name and three number properties: health, strength, and agility. Write test that checks for the existence of those four things.

test('creates a player object', () => {
    const player = new Player('dave');

    expect(player.name).toBe('dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});