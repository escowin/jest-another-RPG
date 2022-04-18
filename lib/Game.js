const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

// Properties
function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
};

// SET UP | Enemy & Player
Game.prototype.initializeGame = function() {
    // INITIALIZE | Enemy {}
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeletn', 'axe'));

    // TRACK | which Enemy{} is fighting Player
    this.currentEnemy = this.enemies[0];

    // PROMPT | Player name
    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'your name?'
    })
    // DESTRUCTURE | name from prompt {}. use the arrow shorthand for all inquirer callbacks in project
    .then(({ name }) => {
        this.player = new Player(name);
        this.startNewBattle();
    });
};

Game.prototype.startNewBattle = function() {
    if (this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true;
    } else {
        this.isPlayerTurn = false;
    }
    console.log('your stats:');
    console.table(this.player.getStats());

    console.log(this.currentEnemy.getDescription());

    this.battle();
};

Game.prototype.battle = function() {
    if (this.isPlayerTurn) {
      inquirer
        .prompt({
          type: 'list',
          message: 'What would you like to do?',
          name: 'action',
          choices: ['Attack', 'Use potion']
        })
        .then(({ action }) => {
          if (action === 'Use potion') {
            if (!this.player.getInventory()) {
              console.log("You don't have any potions!");
              return this.checkEndOfBattle();
            }
  
            inquirer
              .prompt({
                type: 'list',
                message: 'Which potion would you like to use?',
                name: 'action',
                choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
              })
              .then(({ action }) => {
                const potionDetails = action.split(': ');
  
                this.player.usePotion(potionDetails[0] - 1);
                console.log(`You used a ${potionDetails[1]} potion.`);
                this.checkEndOfBattle();
              });
          } else {
            const damage = this.player.getAttackValue();
            this.currentEnemy.reduceHealth(damage);
  
            console.log(`You attacked the ${this.currentEnemy.name}`);
            console.log(this.currentEnemy.getHealth());
  
            this.checkEndOfBattle();
          }
        });
    } else {
      const damage = this.currentEnemy.getAttackValue();
      this.player.reduceHealth(damage);
  
      console.log(`You were attacked by the ${this.currentEnemy.name}`);
      console.log(this.player.getHealth());
  
      this.checkEndOfBattle();
    }
  };

Game.prototype.checkEndOfBattle = function() {
    if (this.player.isAlive() && this.currentEnemy.isAlive()) {
        this.isPlayerTurn = !this.isPlayerTurn;
        this.battle();
    } else if (this.player.isAlive() && !this.currentEnemy.isAlive()) {
        console.log(`you defeat the ${this.currentEnemy.name}`);

        this.player.addPotion(this.currentEnemy.potion);
        console.log(`${this.player.name} found a ${this.currentEnemy.potion.name} potion.`);

        this.roundNumber++;

        if (this.roundNumber < this.enemies.length) {
            this.currentEnemy = this.enemies[this.roundNumber];
            this.startNewBattle();
        } else {
            console.log('you win.');
        }
    } else {
        console.log("you're dead.");
    }
};

module.exports = Game;