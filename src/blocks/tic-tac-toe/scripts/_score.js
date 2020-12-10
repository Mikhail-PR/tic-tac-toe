export class Score {
    constructor(element, name) {
        this.count = 0;
        this.element = element;
        this.valueEl = this.element.querySelector('[name=value]');
        this.valueEl.textContent = this.count;

        if (name) {
            this.nameEl = this.element.querySelector('[name=name]');
            this.nameEl.textContent = name;
        }
    }

    addPoint() {
        this.count++;
        this.valueEl.textContent = this.count;
    }

    destroy() {
        this.count = 0;
    }
}