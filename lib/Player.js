const Potion = require('../lib/Potion');
const Character = require('../lib/Character');

// es6 | class syntax replaces es5 constuctor functions; Character inhereitance
class Player extends Character {
    // player .properties
    constructor(name = '') {
        // calls parent Character constructor for inheritance
        super(name);

        // {player}-specific .properties
        // - calls new Potion() uses mock Potion data, generating two 20hp health potions
        this.inventory = [new Potion('health'), new Potion()];
    }
    
    // player-specific methods()
    getStats() {
        // returns an object w/ player properties
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    getInventory() {
        // returns the inventory array or false if empty
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };

    addPotion(potion) {
        this.inventory.push(potion);
    };

    usePotion(index) {
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
    }
}

// - {character}-inherited prototype.methods()
// es5 | Player.prototype = Object.create(Character.prototype);

module.exports = Player;