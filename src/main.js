import { Application } from "pixi.js";
import { Game } from "./game/Game.js";

const app = new Application();

await app.init({
  resizeTo: window,
  background: "#111111",
});

document
  .getElementById("pixi-container")
  .appendChild(app.canvas);

const game = new Game(app);

await game.init();