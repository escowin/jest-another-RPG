const Potion = require('../lib/Potion');

// player object properties
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    // calling new Potion() uses mock Potion data, generating two 20hp health potions
    this.inventory = [new Potion('health'), new Potion()];
}

// player object methods
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

Player.prototype.getHealth = function() {
    return `${this.name} now has ${this.health} hp!`;
};

Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
    return true;
};

Player.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {
    // .splice() | removes items from an array and returns the removed items as a new array.
    // [inventory] has a potion removed at specified index
    // this potion is put into  new [removed items]
    // the potion as index [0] is saved in potion variable
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
};

module.exports = Player;