import { ExternalItems } from '../abstract-classes/_external-items';

export class Game extends ExternalItems {
    constructor(id, hideStyleClass, GameClass, menuWindow, endGameWindow, stats) {
        super(id, hideStyleClass);
        this.GameClass = GameClass;
        this.menuWindow = menuWindow;
        this.endGameWindow = endGameWindow;
        this.stats = stats;
    }

    play(props) {
        const Game = this.GameClass;
        this.game = new Game(props);
    }

    replay() {
        this.game.restart();
    }

    exit() {
        this.game.destroy();
    }

    close() {
        this.stats.update();
        this.hide();
        this.menuWindow.show();
        this.endGameWindow.show();
    }
}