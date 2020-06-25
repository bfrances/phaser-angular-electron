import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { MainScene } from '../scenes/main-scene';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  phaserGame: Phaser.Game|null = null;
  config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      scene: [ MainScene ],
      parent: 'body',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 }
        }
      },
      scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'body',
        width: '100%',
        height: '100%'
      },
    };
  }

  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.config);
  }
}
