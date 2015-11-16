module PhaserCordovaGame {
    export class Main extends Phaser.State {
        game: Phaser.Game;

        constructor() {
            super();
        }


        create() {

        }

        update() {

        }

        gameOver() {
            this.game.state.start(stateGameOver);
        }
    }
}