import { GameInitItem } from '../abstract-classes/_game-init-item';
import { SelectGameMode } from './_select-game-mode';

export class EndGameWindow extends GameInitItem {
    constructor(...props) {
        super(...props);
        this.winnerAlertEl = this.element.querySelector('#winner-alert');
    }

    switch(btn) {
        super.switch(btn);
        if (btn.linkedItem instanceof SelectGameMode) {
            this.menu.game.exit();
        }
    }

    setWinnerMessage(message) {
        this.winnerAlertEl.textContent = message;
    }

    gameInit() {
        this.menu.game.replay();
    }
}