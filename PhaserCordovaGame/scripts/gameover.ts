module PhaserCordovaGame {
    export class GameOver extends Phaser.State {
        game: Phaser.Game;

        constructor() {
            super();
        }


        create() {

        }

        restartGame() {
            this.game.state.start(stateGameTitle);
        }
    }
}