const Potion = require('../lib/Potion.js');

test('creates a random potion object', () => {
    // new keyword | used to create new objects.
    const potion = new Potion();

    // {Potion} should have | name: "string", value: number
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});