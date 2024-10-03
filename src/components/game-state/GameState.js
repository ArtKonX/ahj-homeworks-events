import "./gameState.css";

export default class GameState {
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
