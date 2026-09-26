import { Sprite } from "pixi.js";

export class Symbol {
  constructor(texture, size) {
    this.sprite = new Sprite(texture);
    this.sprite.width = size;
    this.sprite.height = size

    this.sprite.anchor.set(0.5);
  }
  setPosition(x, y) {
    this.sprite.position.set(x, y)
  }
}