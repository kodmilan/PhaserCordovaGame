module PhaserCordovaGame {

    export class Boot extends Phaser.State {
        game: Phaser.Game;
        constructor() {
            super();
        }

        preload() {

        }

        create() {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.state.start(statePreload);
        }
    }
}