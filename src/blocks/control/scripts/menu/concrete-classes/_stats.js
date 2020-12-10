import { ExternalItems } from '../abstract-classes/_external-items';
import { StatsTable } from './_stats-table';

export class Stats extends ExternalItems {
    constructor(...props) {
        super(...props);
        this.singleplayerStats = new StatsTable('singleplayer-stats-table', 'stats__table--hide', 'singleplayer');
        this.multiplayerStats = new StatsTable('multiplayer-stats-table', 'stats__table--hide', 'multiplayer');
    }

    update() {
        const stats = JSON.parse(localStorage.getItem('stats'));

        if (!stats) {
            this.hide();
        } else {
            this.singleplayerStats.update();
            this.multiplayerStats.update();
            this.show();
        }
    }
}