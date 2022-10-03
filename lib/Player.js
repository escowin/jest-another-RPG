const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    // calling new Potion() uses mock Potion data, generating two 20hp health potions
    this.inventory = [new Potion('health'), new Potion()];
}

Player.prototype.getStats = function() {
    // returns an object w/ player properties
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function() {
    // returns the inventory array or false if empty
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

module.exports = Player;