import "./goblin.css";
import image from "../../img/goblin.png";

export default class Goblin {
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
    imgGoblin.src = image;

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
