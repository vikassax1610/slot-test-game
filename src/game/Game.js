import { Background } from "../components/Background.js";
import { GameBoard } from "../components/GameBoard.js";
import { GAME_CONFIG } from "../config/GameConfig.js";

export class Game {
  constructor(app) {
    this.app = app;

    this.background = new Background(
      app,
      GAME_CONFIG.background.path
    );

    this.gameBoard = new GameBoard(app);
  }

  async init() {
    await this.background.load();

    this.gameBoard.init();

    this.setupResize();
  }

  setupResize() {
    window.addEventListener("resize", () => {
      this.background.resize();
      this.gameBoard.resize();
    });
  }
}