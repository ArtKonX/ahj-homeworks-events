import GameField from "../components/game-field/GameField";
import GamePlay from "../components/game-play/GamePlay";
import GameState from "../components/game-state/GameState";
import Goblin from "../components/goblin/Goblin";

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
