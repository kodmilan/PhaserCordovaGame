module PhaserCordovaGame {
    export class Main extends Phaser.State {
        game: Phaser.Game;
        bird: Phaser.Sprite;
        letterH: Phaser.Sprite;

        rowCount = 5;
        colCount = 5;
        tileWidth = 255;
        tileHeight = 255;
        tiles: Phaser.Sprite[] = [];
        tileScale: number;
        
        constructor() {
            super();
        }


        create() {
            //this.bird = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, assetBirdSpriteSheet, 0);
            //this.bird.scale.setTo(5, 5);
            //this.bird.anchor.setTo(0.5, 0.5);
            //this.bird.animations.add("fly");
            //this.bird.play("fly", 30, true);

            this.tileScale = this.getTileScale();
            


            this.setUpGrid();
        }

        update() {

        }

        gameOver() {
            this.game.state.start(stateGameOver);
        }

        getTileScale() {
            var ww = this.game.world.width;
            var wh = this.game.world.height;

            var tilesWidth = this.colCount * this.tileWidth;
            var tilesHeight = this.rowCount * this.tileHeight;

            // Should width or height control scaling? Grid must fit for both portrait and landscape
            var widthScale = ww / tilesWidth;
            var heightScale = wh / tilesHeight;

            return widthScale < heightScale ? widthScale : heightScale;
        }

        setUpGrid() {
            for (var row = 0; row < this.rowCount; row++) {
                for (var col = 0; col < this.colCount; col++) {
                    this.setupTile(row, col);
                }
            }
        }

        setupTile(row: number, col: number): Phaser.Sprite {
            var index = row * this.colCount + col;
            var t = new Tile(this.game, row, col, this.tileWidth, this.tileScale, (sprite, pointer) => {
                var tile = <Tile>sprite;
                this.flipX(tile);
            });
            this.tiles[index] = t;
            return this.tiles[index];
        }

        flipX(tile: Tile) {
            tile.visible = false;

            this.letterH = this.game.add.sprite(tile.x, tile.y, assetHSpriteSheet, 0);
            this.letterH.scale.setTo(this.tileScale, this.tileScale);
            this.letterH.anchor.setTo(0, 0.05);
            this.letterH.animations.add("flipH", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 30, false);

            this.letterH.play("flipH");

        }

    }
}