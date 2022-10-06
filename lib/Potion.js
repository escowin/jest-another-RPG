// es6 | class syntax replaces es5 constuctor functions
class Potion {
    // constructor | necessary to supply an argument into the class (ie. new Potion('health')). if class needn't receive arguments, constructor can be omitted.
    constructor(name) {
        this.types = ['strength', 'agility', 'health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

        if (this.name === 'health') {
            this.value = Math.floor(Math.random() * 10 + 30);
        } else {
            this.value = Math.floor(Math.random() * 5 + 7);
        }
    }
}

module.exports = Potion;