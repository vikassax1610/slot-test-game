import { Container, Graphics } from "pixi.js";
import { GAME_CONFIG } from "../config/GameConfig.js";

export class GameBoard {
  constructor(app) {
    this.app = app;
    this.container = new Container();
  }

  init() {
    this.app.stage.addChild(this.container);

    this.createGrid();
  }

  createGrid() {
    const { columns, rows, symbolSize, gap } = GAME_CONFIG.grid;

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        const cell = new Graphics();

        cell.rect(
          0,
          0,
          symbolSize,
          symbolSize
        );

        cell.fill(0xffffff);

        cell.x = column * (symbolSize + gap);
        cell.y = row * (symbolSize + gap);

        this.container.addChild(cell);
      }
    }
  }
}