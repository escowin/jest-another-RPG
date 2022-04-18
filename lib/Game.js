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

module.exports = Game;