import { Container } from "pixi.js";
import { Symbol } from "./Symbols.js";
import { GAME_CONFIG } from "../config/gameConfig.js";

export class GameBoard {
  constructor(app, symbolTextures) {
    this.app = app;
    this.symbolTextures = symbolTextures;

    this.container = new Container();
    this.symbols = [];
  }


  init() {
    this.app.stage.addChild(this.container);

    this.createBoard();
    this.resize();
  }

  createBoard() {
    const {
      columns,
      rows,
      symbolSize,
      gap,
    } = GAME_CONFIG.grid;

    const symbolNames = Object.keys(this.symbolTextures);

    for (let row = 0; row < rows; row++) {
      this.symbols[row] = [];

      for (let column = 0; column < columns; column++) {
        // Pick a random symbol
        const randomIndex = Math.floor(
          Math.random() * symbolNames.length
        );

        const symbolName = symbolNames[randomIndex];

        const texture = this.symbolTextures[symbolName];

        // Create our Symbol object
        const symbol = new Symbol(
          texture,
          symbolSize
        );

        // Position inside the grid
        const x =
          column * (symbolSize + gap) +
          symbolSize / 2;

        const y =
          row * (symbolSize + gap) +
          symbolSize / 2;

        symbol.setPosition(x, y);

        // Add sprite to board
        this.container.addChild(symbol.sprite);

        // Store symbol
        this.symbols[row][column] = {
          name: symbolName,
          object: symbol,
        };
      }
    }
  }

  resize() {
    const {
      columns,
      rows,
      symbolSize,
      gap,
    } = GAME_CONFIG.grid;

    const boardWidth =
      columns * symbolSize +
      (columns - 1) * gap;

    const boardHeight =
      rows * symbolSize +
      (rows - 1) * gap;

    this.container.x =
      (this.app.screen.width - boardWidth) / 2;

    this.container.y =
      (this.app.screen.height - boardHeight) / 2;
  }
}