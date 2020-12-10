import { ExternalItems } from '../abstract-classes/_external-items';

export class StatsTable extends ExternalItems {
    constructor(id, hideStyleClass, statsType) {
        super(id, hideStyleClass);
        this.statsType = statsType;
        this.statElements = [];
    }

    update() {
        this.clear();
        const stats = JSON.parse(localStorage.getItem('stats'));

        if (this.emptyCheck(stats[this.statsType])) {
            this.hide();
        } else {
            this.show();
        }

        stats[this.statsType].forEach(stat => {
            if (stat) {
                this.insertStat(stat);
            }
        });

    }

    insertStat(stat) {
        const statHtml = `<th class="stats__table-value">${stat.name}</th>
                            <th class="stats__table-value">${stat.win}</th>
                            <th class="stats__table-value">${stat.draw}</th>
                            <th class="stats__table-value">${stat.lose}</th>`;

        const tableRowEl = document.createElement('tr');
        tableRowEl.className = 'stats__table-row';
        tableRowEl.innerHTML = statHtml;
        this.statElements.push(tableRowEl);

        this.element.append(tableRowEl);
    }

    clear() {
        this.statElements.forEach(statEl => {
            statEl.remove();
        });
    }

    emptyCheck(statsObj) {
        return Object.keys(statsObj).length === 0;
    }
}