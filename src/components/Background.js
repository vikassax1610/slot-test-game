import { Assets, Sprite } from "pixi.js";

export class Background {
  constructor(app, path) {
    this.app = app;
    this.path = path;
    this.sprite = null;
  }

  async load() {
    const texture = await Assets.load(this.path);

    this.sprite = new Sprite(texture);

    this.app.stage.addChild(this.sprite);

    this.resize();
  }

  resize() {
    if (!this.sprite) return;

    const screenWidth = this.app.screen.width;
    const screenHeight = this.app.screen.height;

    const textureWidth = this.sprite.texture.width;
    const textureHeight = this.sprite.texture.height;

    // Scale like CSS background-size: cover
    const scale = Math.max(
      screenWidth / textureWidth,
      screenHeight / textureHeight
    );

    this.sprite.scale.set(scale);

    // Center the background
    this.sprite.anchor.set(0.5);

    this.sprite.position.set(
      screenWidth / 2,
      screenHeight / 2
    );
  }
}