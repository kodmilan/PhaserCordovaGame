module PhaserCordovaGame {

    export var assetLogo= "logo";
    export var assetBirdSpriteSheet = "birdSpriteSheet";
    export var assetHSpriteSheet = "assetH";
    export var assetTileBack = "tileBack";

    export class Preload extends Phaser.State {
        game: Phaser.Game;

        
        constructor() {
            super();
        }

        preload() {
            this.game.load.image(assetLogo, "images/phaser2.png");
            this.game.load.spritesheet(assetBirdSpriteSheet, "images/robin-782x1024.png", 156, 205, 22);

            this.game.load.image(assetTileBack, "images/tileback.png");
            this.game.load.spritesheet(assetHSpriteSheet, "images/H - nB x nH - 12n 255 x 2n 275.png", 255, 275, 24);

        }

        create() {
            this.game.state.start(stateGameTitle);
        }
    }
}