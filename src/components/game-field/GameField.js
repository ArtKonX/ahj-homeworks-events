import "./gameField.css";

export default class GameField {
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
