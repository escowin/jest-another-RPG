const Potion = require('../lib/Potion');
const Character = require('../lib/Character');

// es6 | class syntax replaces es5 constuctor function; Character inheritance
class Enemy extends Character {
    // enemy .properties
    constructor(name, weapon) {
        // calls parent Character constructor for inheritance
        super(name);

        // {enemy}-specific .properties
        this.weapon = weapon;
        this.potion = new Potion();
    }

    // enemy-specific methods()
    getDescription() {
        return `${this.name} appears weilding the stand ${this.weapon}!`;
    }
}

// {character}-inherited protoype.methods()
// es5 | Enemy.prototype = Object.create(Character.prototype);


module.exports = Enemy;