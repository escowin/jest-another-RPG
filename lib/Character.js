// shared by both the player & enemy objects
// - character properties
function Character() {}

// - character methods
Character.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    }
    return true;
};

Character.prototype.getHealth = function() {
    return `${this.name} now has ${this.health} hp!`;
};

Character.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

Character.prototype.reduceHealth = function(health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

module.exports = Character;

// npm lib/Character | undefined values atm but can see the code runs a it should 
console.log(new Character().getHealth());