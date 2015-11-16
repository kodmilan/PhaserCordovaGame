/// <reference path="../bower_components/phaser/typescript/phaser.d.ts" />

module PhaserCordovaGame {

    //enum States { Boot, Preload, GameTitle, Main, GameOver };
    //function getStateName(state: States) : string {
    //    var stateName: string = States[state];
    //    return stateName;
    //}
    export var stateBoot = "Boot";
    export var statePreload = "Preload";
    export var stateGameTitle = "GameTitle";
    export var stateMain = "Main";
    export var stateGameOver = "GameOver";

    export class SimpleGame {

        constructor() {
            this.game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, 'content');

            //Add all states
            this.game.state.add(stateBoot, Boot);
            this.game.state.add(statePreload, Preload);
            this.game.state.add(stateGameTitle, GameTitle);
            this.game.state.add(stateMain, Main);
            this.game.state.add(stateGameOver, GameOver);

            //Start the first state
            this.game.state.start(stateBoot);
        }

        game: Phaser.Game;

    }
}