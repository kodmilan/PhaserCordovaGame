module PhaserCordovaGame {
    export class Tile extends Phaser.Sprite {

        constructor(game: Phaser.Game, row: number, col: number, origSize: number, scale: number, clickHandler: Function) {
            var tileWidth = origSize * scale;
            var tileHeight = origSize * scale;
            
            super(game, col * tileWidth, row * tileHeight, assetTileBack);

            this.scale.setTo(scale);
            this.anchor.setTo(0, 0);
            this.inputEnabled = true;
            this.events.onInputDown.add(clickHandler, this);

            game.add.existing(this);

        }

    }
}
