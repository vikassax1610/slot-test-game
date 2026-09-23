import { Background } from "../components/Background.js";
import { GAME_CONFIG } from "../config/GameConfig.js";

export class Game {
  constructor(app) {
    this.app = app;

    this.background = new Background(
      app,
      GAME_CONFIG.background.path
    );
  }

  async init() {
    await this.background.load();

    this.setupResize();
  }

  setupResize() {
    window.addEventListener("resize", () => {
      this.background.resize();
    });
  }
}