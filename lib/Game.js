const inquirer = require("inquirer");
const Enemy = require("./Enemy");
const Player = require("./Player");

function Game() {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [];
  this.currentEnemy;
  this.player;
}

Game.prototype.initializeGame = function () {
  this.enemies.push(new Enemy("Dio", "za warudo"));
  this.enemies.push(new Enemy("Pet Shop", "horus"));
  this.enemies.push(new Enemy("Vanilla Ice", "cream"));
  this.currentEnemy = this.enemies[0];

  // prompt user for name
  inquirer
    .prompt({
      type: "text",
      name: "name",
      message: "enter your name",
    })
    // destructure name from prompt oject
    .then(({ name }) => {
      this.player = new Player(name);

      //   console.log(this.currentEnemy, this.player);
      this.startNewBattle();
    });
};

module.exports = Game;
