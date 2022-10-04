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

Game.prototype.startNewBattle = function () {
  if (this.player.agility > this.currentEnemy.agility) {
    this.isPlayerTurn = true;
  } else {
    this.isPlayerTurn = false;
  }

  console.log("your current stats:");
  console.table(this.player.getStats());
  console.log(this.currentEnemy.getDescription());

  this.battle();
};

Game.prototype.battle = function () {
  // - if use potion | display list pf Potion objects; apply selected Potion effect to Player
  // -if attack | subtract health from Enemy based on Player attack value
  if (this.isPlayerTurn) {
    // player prompt: attack or use potion?
    inquirer
      .prompt({
        type: "list",
        message: "what do you want to do?",
        name: "action",
        choices: ["Attack", "Use potion"],
      })
      .then(({ action }) => {
        if (action === "Use potion") {
          if (!this.player.getInventory()) {
            console.log("You haven't any potions!");
            return this.checkEndOfBattle();
          }

          inquirer
            .prompt({
              type: "list",
              message: "which potion will you use?",
              name: "action",
              choices: this.player
                .getInventory()
                .map((item, index) => `${index + 1}: ${item.name}`),
            })
            .then(({ action }) => {
              const potionDetails = action.split(": ");

              this.player.usePotion(potionDetails[0] - 1);
              console.log(`You consumed a ${potionDetails[1]} potion`);

              this.checkEndOfBattle();
            });
        } else {
          const damage = this.player.getAttackValue();
          this.currentEnemy.reduceHealth(damage);

          console.log(`You've attacked ${this.currentEnemy.name}`);
          console.log(this.currentEnemy.getHealth());

          this.checkEndOfBattle();
        }
      });
  } else {
    // Enemy turn | subtract health from Player based on Enemy attack value
    const damage = this.currentEnemy.getAttackValue();
    this.player.reduceHealth(damage);

    console.log(`${this.currentEnemy.name} attacked you!`);
    console.log(this.player.getHealth());

    this.checkEndOfBattle();
  }
};

Game.prototype.checkEndOfBattle = function () {
    if (this.player.isAlive() && this.currentEnemy.isAlive()) {
        this.isPlayerTurn = !this.isPlayerTurn;
        this.battle();
    } else if (this.player.isAlive() && !this.currentEnemy.isAlive()) {
        console.log(`You have defeated ${this.currentEnemy.name}!`);

        this.player.addPotion(this.currentEnemy.potion);
        console.log(`${this.player.name} found a ${this.currentEnemy.potion.name} potion`);

        this.roundNumber++;

        if (this.roundNumber < this.enemies.length) {
            this.currentEnemy = this.enemies[this.roundNumber];
            this.startNewBattle();
        } else {
            console.log(`${this.player.name} wins!`);
        }
    } else {
        console.log("You've been defeated!");
    }
};

module.exports = Game;
