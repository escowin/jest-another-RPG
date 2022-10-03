const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    // calling new Potion() uses mock Potion data, generating two 20hp health potions
    this.inventory = [new Potion('health'), new Potion()];
}

module.exports = Player;