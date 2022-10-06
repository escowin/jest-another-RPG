// es6 | class syntax replaces es5 constuctor function
// shared by both the player & enemy objects
class Character {
    // {Character} properties
    constructor(name = '') {
        this.name = name;
        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
    }

    // {Character} methods()
    isAlive() {
        if (this.health === 0) {
            return false;
        }
        return true;
    };

    getHealth() {
        return `${this.name} now has ${this.health} hp!`;
    };

    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);
    };

    reduceHealth(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    }
}

module.exports = Character;

// npm lib/Character | undefined values atm but can see the code runs a it should 
// console.log(new Character().getHealth());