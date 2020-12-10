import { Score } from './_score';

export class Player {
    constructor(ticTacToe, name, side, isAi, winCombinations) {
        this.ticTacToe = ticTacToe;
        this.board = this.ticTacToe.board;
        this.name = name;
        this.side = side;
        this.figure = {
            figureStyleClasses: {
                class: this.side,
                hideClass: `${this.side}--hide`
            },
            drawAnimationTime: 1000
        }
        this.isAi = isAi || false;
        this.activeStyle = 'score__block--active';
        this.setWinCombinations(winCombinations);

        const scoreEl = this.ticTacToe.element.querySelector(`[name=${this.side}]`);
        this.score = new Score(scoreEl, this.name);
    }

    setWinCombinations(winCombinations) {
        this.winCombinations = winCombinations;
    }

    makeMove(cell) {
        cell.figure = this.side;
        cell.figureStyleClasses = this.figure.figureStyleClasses;
        const gameOver = this.board.endGameCheck(cell);

        const enemyFigureDrawTime = this.enemyPlayer.figure.drawAnimationTime;
        const delayedDrawMove = this.ticTacToe.setDelay(this.drawMove, enemyFigureDrawTime, this);

        if (!this.isAi) {
            this.drawMove(cell, gameOver);
        } else {
            if (this.ticTacToe.moveCounter !== 1) {
                delayedDrawMove(cell, gameOver);
            } else {
                const delayedDrawFirstMove = this.ticTacToe.setDelay(this.drawMove, 500, this);
                delayedDrawFirstMove(cell, gameOver);
            }
        }
    }

    drawMove(cell, gameOver) {
        cell.draw();
        if (!gameOver) {
            this.toggleActiveStyle();
            this.ticTacToe.changeMove();
        }
    }

    toggleActiveStyle() {
        this.score.element.classList.toggle(this.activeStyle);
    }

    removeActiveStyle() {
        this.score.element.classList.remove(this.activeStyle);
    }
}