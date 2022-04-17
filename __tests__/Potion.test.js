const { test, expect } = require('@jest/globals');
const exp = require('constants');
const Potion = require('../lib/Potion');

test('creates health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});