import { SelectGameMode } from './concrete-classes/_select-game-mode';
import { SingleplayerOptions } from './concrete-classes/_singleplayer-options';
import { MultiplayerOptions } from './concrete-classes/_multiplayer-options';
import { EndGameWindow } from './concrete-classes/_end-game-window';
import { Game } from './concrete-classes/_game';
import { MenuWindow } from './concrete-classes/_menu-window';
import { Stats } from './concrete-classes/_stats';


export class Menu {
    constructor(GameClass) {
        this.element = document.querySelector('#control');
        this.items = [];

        this.init(GameClass);
    }

    init(GameClass) {
        this.items.push(new SelectGameMode(this, 'select-game-mode'));
        this.items.push(new SingleplayerOptions(this, 'singleplayer-options'));
        this.items.push(new MultiplayerOptions(this, 'multiplayer-options'));
        const endGameWindow = new EndGameWindow(this, 'end-game-window');
        this.items.push(endGameWindow);
        this.menuWindow = new MenuWindow('menu-window', 'menu-window--hide');
        this.items.push(this.menuWindow);
        const stats = new Stats('stats', 'stats--hide');
        this.items.push(stats);
        this.game = new Game('tic-tac-toe', 'tic-tac-toe--hide', GameClass, this.menuWindow, endGameWindow, stats);
        this.items.push(this.game);

        this.itemsPathsInit();

        this.items.forEach(item => {
            if (item.buttonsInit) item.buttonsInit();
        });

        stats.update();
    }

    itemsPathsInit() {
        const itemsDependencies = {
            'select-game-mode': ['back-btn', 'exit-btn'],
            'singleplayer-options': ['singleplayer-btn'],
            'multiplayer-options': ['multiplayer-btn'],
            'tic-tac-toe': ['play-btn', 'play-more-btn']
        };

        this.itemsPaths = new Map();

        const itemSearch = id => {
            for (let i = 0; i < this.items.length; i++) {
                if (id === this.items[i].element.id) {
                    return this.items[i];
                }
            }
        }

        for (let itemId in itemsDependencies) {
            let item = itemSearch(itemId);

            this.itemsPaths.set(item, itemsDependencies[itemId])
        }
    }
}