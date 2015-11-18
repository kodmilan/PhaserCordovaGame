var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PhaserCordovaGame;
(function (PhaserCordovaGame) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.call(this);
        }
        Boot.prototype.preload = function () {
        };
        Boot.prototype.create = function () {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.state.start(PhaserCordovaGame.statePreload);
        };
        return Boot;
    })(Phaser.State);
    PhaserCordovaGame.Boot = Boot;
})(PhaserCordovaGame || (PhaserCordovaGame = {}));
/// <reference path="../bower_components/phaser/typescript/phaser.d.ts" />
var PhaserCordovaGame;
(function (PhaserCordovaGame) {
    PhaserCordovaGame.stateBoot = "Boot";
    PhaserCordovaGame.statePreload = "Preload";
    PhaserCordovaGame.stateGameTitle = "GameTitle";
    PhaserCordovaGame.stateMain = "Main";
    PhaserCordovaGame.stateGameOver = "GameOver";
    var SimpleGame = (function () {
        function SimpleGame() {
            this.game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, 'content');
            //Add all states
            this.game.state.add(PhaserCordovaGame.stateBoot, PhaserCordovaGame.Boot);
            this.game.state.add(PhaserCordovaGame.statePreload, PhaserCordovaGame.Preload);
            this.game.state.add(PhaserCordovaGame.stateGameTitle, PhaserCordovaGame.GameTitle);
            this.game.state.add(PhaserCordovaGame.stateMain, PhaserCordovaGame.Main);
            this.game.state.add(PhaserCordovaGame.stateGameOver, PhaserCordovaGame.GameOver);
            //Start the first state
            this.game.state.start(PhaserCordovaGame.stateBoot);
        }
        return SimpleGame;
    })();
    PhaserCordovaGame.SimpleGame = SimpleGame;
})(PhaserCordovaGame || (PhaserCordovaGame = {}));
var PhaserCordovaGame;
(function (PhaserCordovaGame) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        function GameOver() {
            _super.call(this);
        }
        GameOver.prototype.create = function () {
        };
        GameOver.prototype.restartGame = function () {
            this.game.state.start(PhaserCordovaGame.stateGameTitle);
        };
        return GameOver;
    })(Phaser.State);
    PhaserCordovaGame.GameOver = GameOver;
})(PhaserCordovaGame || (PhaserCordovaGame = {}));
var PhaserCordovaGame;
(function (PhaserCordovaGame) {
    var GameTitle = (function (_super) {
        __extends(GameTitle, _super);
        function GameTitle() {
            _super.call(this);
        }
        GameTitle.prototype.create = function () {
            var _this = this;
            var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, PhaserCordovaGame.assetLogo);
            logo.anchor.setTo(0.5, 0.5);
            logo.scale.setTo(0.2, 0.2);
            this.game.add.tween(logo.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);
            logo.inputEnabled = true;
            logo.events.onInputDown.add(function () { return _this.startGame(); });
        };
        GameTitle.prototype.startGame = function () {
            this.game.state.start(PhaserCordovaGame.stateMain);
        };
        return GameTitle;
    })(Phaser.State);
    PhaserCordovaGame.GameTitle = GameTitle;
})(PhaserCordovaGame || (PhaserCordovaGame = {}));
/// <reference path="game.ts" />
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var PhaserCordovaGame;
(function (PhaserCordovaGame) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener("pause", onPause, false);
            document.addEventListener("resume", onResume, false);
            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
            var game = new PhaserCordovaGame.SimpleGame();
        }
        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }
        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }
    })(Application = PhaserCordovaGame.Application || (PhaserCordovaGame.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(PhaserCordovaGame || (PhaserCordovaGame = {}));
var PhaserCordovaGame;
(function (PhaserCordovaGame) {
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.call(this);
            this.rowCount = 5;
            this.colCount = 5;
            this.tileWidth = 255;
            this.tileHeight = 255;
            this.tiles = [];
        }
        Main.prototype.create = function () {
            //this.bird = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, assetBirdSpriteSheet, 0);
            //this.bird.scale.setTo(5, 5);
            //this.bird.anchor.setTo(0.5, 0.5);
            //this.bird.animations.add("fly");
            //this.bird.play("fly", 30, true);
            this.tileScale = this.getTileScale();
            this.setUpGrid();
        };
        Main.prototype.update = function () {
        };
        Main.prototype.gameOver = function () {
            this.game.state.start(PhaserCordovaGame.stateGameOver);
        };
        Main.prototype.getTileScale = function () {
            var ww = this.game.world.width;
            var wh = this.game.world.height;
            var tilesWidth = this.colCount * this.tileWidth;
            var tilesHeight = this.rowCount * this.tileHeight;
            // Should width or height control scaling? Grid must fit for both portrait and landscape
            var widthScale = ww / tilesWidth;
            var heightScale = wh / tilesHeight;
            return widthScale < heightScale ? widthScale : heightScale;
        };
        Main.prototype.setUpGrid = function () {
            for (var row = 0; row < this.rowCount; row++) {
                for (var col = 0; col < this.colCount; col++) {
                    this.setupTile(row, col);
                }
            }
        };
        Main.prototype.setupTile = function (row, col) {
            var _this = this;
            var index = row * this.colCount + col;
            var t = new PhaserCordovaGame.Tile(this.game, row, col, this.tileWidth, this.tileScale, function (sprite, pointer) {
                var tile = sprite;
                _this.flipX(tile);
            });
            this.tiles[index] = t;
            return this.tiles[index];
        };
        Main.prototype.flipX = function (tile) {
            tile.visible = false;
            this.letterH = this.game.add.sprite(tile.x, tile.y, PhaserCordovaGame.assetHSpriteSheet, 0);
            this.letterH.scale.setTo(this.tileScale, this.tileScale);
            this.letterH.anchor.setTo(0, 0.05);
            this.letterH.animations.add("flipH", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 30, false);
            this.letterH.play("flipH");
        };
        return Main;
    })(Phaser.State);
    PhaserCordovaGame.Main = Main;
})(PhaserCordovaGame || (PhaserCordovaGame = {}));
var PhaserCordovaGame;
(function (PhaserCordovaGame) {
    PhaserCordovaGame.assetLogo = "logo";
    PhaserCordovaGame.assetBirdSpriteSheet = "birdSpriteSheet";
    PhaserCordovaGame.assetHSpriteSheet = "assetH";
    PhaserCordovaGame.assetTileBack = "tileBack";
    var Preload = (function (_super) {
        __extends(Preload, _super);
        function Preload() {
            _super.call(this);
        }
        Preload.prototype.preload = function () {
            this.game.load.image(PhaserCordovaGame.assetLogo, "images/phaser2.png");
            this.game.load.spritesheet(PhaserCordovaGame.assetBirdSpriteSheet, "images/robin-782x1024.png", 156, 205, 22);
            this.game.load.image(PhaserCordovaGame.assetTileBack, "images/tileback.png");
            this.game.load.spritesheet(PhaserCordovaGame.assetHSpriteSheet, "images/H - nB x nH - 12n 255 x 2n 275.png", 255, 275, 24);
        };
        Preload.prototype.create = function () {
            this.game.state.start(PhaserCordovaGame.stateGameTitle);
        };
        return Preload;
    })(Phaser.State);
    PhaserCordovaGame.Preload = Preload;
})(PhaserCordovaGame || (PhaserCordovaGame = {}));
var PhaserCordovaGame;
(function (PhaserCordovaGame) {
    var Tile = (function (_super) {
        __extends(Tile, _super);
        function Tile(game, row, col, origSize, scale, clickHandler) {
            var tileWidth = origSize * scale;
            var tileHeight = origSize * scale;
            _super.call(this, game, col * tileWidth, row * tileHeight, PhaserCordovaGame.assetTileBack);
            this.scale.setTo(scale);
            this.anchor.setTo(0, 0);
            this.inputEnabled = true;
            this.events.onInputDown.add(clickHandler, this);
            game.add.existing(this);
        }
        return Tile;
    })(Phaser.Sprite);
    PhaserCordovaGame.Tile = Tile;
})(PhaserCordovaGame || (PhaserCordovaGame = {}));
//# sourceMappingURL=appBundle.js.map