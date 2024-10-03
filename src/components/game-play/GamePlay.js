export default class GamePlay {
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
