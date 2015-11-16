module PhaserCordovaGame {

    export var assetLogo: string = "logo";

    export class Preload extends Phaser.State {
        game: Phaser.Game;

        
        constructor() {
            super();
        }

        preload() {
            this.game.load.image(assetLogo, "images/phaser2.png");
        }

        create() {
            this.game.state.start(stateGameTitle);
        }
    }
}