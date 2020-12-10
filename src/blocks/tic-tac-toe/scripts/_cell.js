export class Cell {
    constructor(board, elNumber) {
        this.containerEl = board.element;
        this.element = this.containerEl.querySelector(`.tic-tac-toe__board > :nth-child(${elNumber})`);
        this.winCombinations = [];
        this.figure = null;
    }

    draw() {
        const figureClass = this.figureStyleClasses.class;
        const hideClass = this.figureStyleClasses.hideClass;
        const figureEl = this.element.querySelector(`.${figureClass}`);

        figureEl.classList.toggle(hideClass);
        this.element.classList.toggle('tic-tac-toe__cell--active');
    }

    clear() {
        const figureClass = this.figureStyleClasses.class;
        const hideClass = this.figureStyleClasses.hideClass;
        const figureEl = this.element.querySelector(`.${figureClass}`);

        figureEl.classList.add(hideClass);
        this.element.classList.remove('tic-tac-toe__cell--active');
    }

    destroy() {
        this.clear();
        this.winCombinations = [];
        this.figureStyleClasses = null;
        this.figure = null;
    }
}