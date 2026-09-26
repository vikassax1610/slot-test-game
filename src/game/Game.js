import { Assets } from "pixi.js";

import { Background } from "../components/Background.js";
import { GameBoard } from "../components/GameBoard.js";
import { GAME_CONFIG } from "../config/gameConfig.js";
import { SYMBOLS } from "../config/symbols.js";

export class Game {
  constructor(app) {
    this.app = app;

    this.background = new Background(
      app,
      GAME_CONFIG.background.path
    );

    this.gameBoard = null;
    this.symbolTextures = {};
  }

  async loadSymbolTextures() {
    for (const [name, path] of Object.entries(SYMBOLS)) {
      this.symbolTextures[name] = await Assets.load(path);
    }
  }

  async init() {
    await this.background.load();

    await this.loadSymbolTextures();

    this.gameBoard = new GameBoard(
      this.app,
      this.symbolTextures
    );

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