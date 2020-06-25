import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {

  constructor() {
    super({ key: 'main' });
  }

  create(): void {
    console.log('create method');
    const image = this.add.image(0, 0, 'initializedGame');
    image.setPosition(this.scale.width / 2, this.scale.height / 2 - image.height / 2);
  }

  preload(): void {
    console.log('preload method');
    this.load.image('initializedGame', 'assets/initializedGame.png');
  }

  update(): void {
    console.log('update method');
  }
}
