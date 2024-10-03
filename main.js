/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/components/game-field/GameField.js

class GameField {
  constructor(boardField) {
    this.boardField = boardField;
  }
  createField() {
    const gameField = document.querySelector(".game-field");
    const fieldList = document.createElement("ul");
    fieldList.classList.add("field-list");
    gameField.appendChild(fieldList);
    for (let i = 0; i < Math.pow(this.boardField, 2); i++) {
      const gameCell = document.createElement("li");
      fieldList.appendChild(gameCell);
      gameCell.classList.add("game-cell");
    }
  }
}
;// ./src/components/game-play/GamePlay.js
class GamePlay {
  constructor(gameState) {
    this.gameState = gameState;
  }
  showEndGame() {
    if (this.gameState.missed >= 5) {
      alert(`Вы проиграли со счетом - ${this.gameState.points}(`);
      alert("Сейчас начнется новая игра)");
      this.gameState.points = 0;
      this.gameState.missed = 0;
    }
  }
}
;// ./src/components/game-state/GameState.js

class GameState {
  constructor() {
    this.points = 0;
    this.missed = 0;
  }
  drawStatistic() {
    const pointsBlock = document.querySelector(".points");
    const missedBlock = document.querySelector(".missed");
    pointsBlock.textContent = `Всего очков - ${this.points}`;
    missedBlock.textContent = `Всего пропущенных гоблинов - ${this.missed}`;
  }
}
;// ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// ./src/components/goblin/Goblin.js


class Goblin {
  constructor(goblinElement, gameState, gamePlay) {
    if (typeof goblinElement === "string") {
      goblinElement = document.querySelector(goblinElement);
    }
    this._goblinElement = goblinElement;
    this.gameState = gameState;
    this.gamePlay = gamePlay;
    this.showGoblin = this.showGoblin.bind(this);
    this.onClickGoblin = this.onClickGoblin.bind(this);
    this._goblinElement.addEventListener("click", this.onClickGoblin);
    this.init();
  }
  init() {
    setInterval(this.showGoblin, 1000);
  }
  showGoblin() {
    this.gameState.drawStatistic();
    this.gamePlay.showEndGame();
    const imgGoblin = document.createElement("img");
    imgGoblin.classList.toggle("goblin-img");
    imgGoblin.src = goblin_namespaceObject;
    const fieldListUl = document.querySelector("ul");
    const img = document.querySelector("img");
    const fieldList = fieldListUl.querySelectorAll("li");
    img && img.remove();
    const randomIndex = Math.floor(Math.random() * fieldList.length);
    for (let i = 0; i < fieldList.length; i++) {
      if (i === randomIndex) {
        this.gameState.missed += 1;
        fieldList[i].classList.add("active");
        fieldList[i].appendChild(imgGoblin);
      } else {
        fieldList[i].classList.remove("active");
      }
    }
  }
  onClickGoblin(e) {
    const listItem = e.target.closest(".game-cell");
    if (listItem) {
      const active = listItem.querySelector(".goblin-img");
      if (active) {
        this.gameState.points++;
        this.gameState.missed--;
      }
      listItem.classList.remove("active");
      active && active.remove();
    }
  }
}
;// ./src/js/app.js




document.addEventListener("DOMContentLoaded", () => {
  const gameField = new GameField(4);
  const gameState = new GameState();
  const gamePlay = new GamePlay(gameState);
  const goblin = new Goblin(".game-field", gameState, gamePlay);
  () => {
    goblin;
  };
  gameField.createField();
});
;// ./src/index.js


/******/ })()
;