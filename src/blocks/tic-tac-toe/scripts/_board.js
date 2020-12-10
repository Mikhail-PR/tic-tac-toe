import { Cell } from './_cell';
import { Combination } from './_combination';

export class Board {
    constructor(ticTacToe) {
        this.ticTacToe = ticTacToe;
        this.element = this.ticTacToe.element.querySelector('.tic-tac-toe__board');
        this.rows = [];
        this.winCombinations = [];
        this.clickedCellSearchShim = this.clickedCellSearch.bind(this);

        this.init();
    }

    init() {
        this.cellsInit();
        this.winCombinationsInit();
        if (this.ticTacToe.gameMode === 'multiplayer') this.listen(true);
    }

    cellsInit() {
        this.cellsCount = 0;
        for (let i = 0; i < 3; i++) {
            this.rows[i] = new Array(3);

            for (let j = 0; j < 3; j++) {
                this.cellsCount++;
                this.rows[i][j] = new Cell(this, this.cellsCount);
            }
        }
    }

    winCombinationsInit() {
        this.winCombinations = [];
        const isSingleplayer = this.ticTacToe.gameMode === 'singleplayer';

        for (let i = 0; i < this.rows.length; i++) {
            const combination = new Combination(isSingleplayer);

            for (let j = 0; j < this.rows.length; j++) {
                combination.cells.push(this.rows[i][j]);
            }
            combination.winLineCoords = this.winLineCoordsCalculate(i);
            this.winCombinations.push(combination);
            combination.cells.forEach(cell => cell.winCombinations.push(combination));
        }

        for (let j = 0; j < this.rows.length; j++) {
            const combination = new Combination(isSingleplayer);

            for (let i = 0; i < this.rows.length; i++) {
                combination.cells.push(this.rows[i][j]);
            }
            combination.winLineCoords = this.winLineCoordsCalculate(j, 'columns');
            this.winCombinations.push(combination);
            combination.cells.forEach(cell => cell.winCombinations.push(combination));
        }

        let combination = new Combination(isSingleplayer);

        for (let i = 0; i < this.rows.length; i++) {
            const j = i;
            combination.cells.push(this.rows[i][j]);
        }
        combination.winLineCoords = this.winLineCoordsCalculate(null, 'secondary-diagonal');
        combination.isDiagonal = true;
        this.winCombinations.push(combination);
        combination.cells.forEach(cell => cell.winCombinations.push(combination));

        combination = new Combination(isSingleplayer);
        let j = 0;

        for (let i = 2; i > -1; i--) {
            combination.cells.push(this.rows[i][j]);
            j++
        }
        combination.winLineCoords = this.winLineCoordsCalculate(null, 'main-diagonal');
        combination.isDiagonal = true;
        this.winCombinations.push(combination);
        combination.cells.forEach(cell => cell.winCombinations.push(combination));
    }

    listen(enable) {
        if (enable) {
            this.element.addEventListener('click', this.clickedCellSearchShim);
        } else {
            this.element.removeEventListener('click', this.clickedCellSearchShim);
        }
    }

    clickedCellSearch(e) {
        let clickedCell;

        for (let i = 0; i < this.rows.length; i++) {
            for (let j = 0; j < this.rows.length; j++) {
                if (this.rows[i][j].element.contains(e.target)) {
                    clickedCell = this.rows[i][j];
                    break;
                }
            }
        }

        if (clickedCell) {
            if (!clickedCell.figure) {
                this.ticTacToe.curPlayer.makeMove(clickedCell);
            }
        }
    }

    winLineCoordsCalculate(count, combinationType) {
        const coordSteps = [16.6, 50, 83.4];
        let x1 = 5;
        let x2 = 100 - x1;
        let y1 = coordSteps[count];
        let y2 = y1;


        if (combinationType === 'columns') {
            [x1, y1] = [y1, x1];
            [x2, y2] = [y2, x2];
        }

        if (combinationType === 'main-diagonal') {
            y1 = x2;
            y2 = x1;
        }

        if (combinationType === 'secondary-diagonal') {
            y1 = x1;
            y2 = x2;
        }

        const coords = {
            x1: x1,
            x2: x2,
            y1: y1,
            y2: y2
        };

        return coords;
    }

    winCombinationsCheck(cell) {
        let winCombination;

        cell.winCombinations.forEach(combination => {
            if (this.onlyDuplicatesCheck(combination.cells)) {
                winCombination = combination;
            }
        });

        return winCombination;
    }

    onlyDuplicatesCheck(arr) {
        let firstVal = arr[0].figure;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].figure !== firstVal || !arr[i].figure) {
                return false;
            }
        }
        return true;
    }

    endGameCheck(cell) {
        const enemyPlayerWinComb = this.ticTacToe.curPlayer.enemyPlayer.winCombinations;
        const filteredEnemyPlayerWinComb = this.winCombinationsFilter(cell.winCombinations, enemyPlayerWinComb);
        this.ticTacToe.curPlayer.enemyPlayer.winCombinations = filteredEnemyPlayerWinComb;

        const isSingleplayer = this.ticTacToe.gameMode === 'singleplayer';

        if (isSingleplayer) {
            this.winCombinationsRankUp(cell.winCombinations);
        }

        const winCombination = this.winCombinationsCheck(cell);
        let gameOver = false;

        if (winCombination || this.ticTacToe.moveCounter === this.cellsCount) {
            this.ticTacToe.gameOver(winCombination);
            gameOver = true;
        }

        if (gameOver) this.listen(false);

        return gameOver;
    }

    winCombinationsRankUp(winCombinations) {
        winCombinations.forEach(combination => combination.rank++);
    }

    winCombinationsFilter(excludedCombinations, filtrationСombinations) {
        const filteredComb = filtrationСombinations.filter(combination => {
            return !excludedCombinations.includes(combination);
        });

        return filteredComb;
    }

    destroy() {
        this.rows.forEach(row => {
            row.forEach(cell => {
                if (cell.figure) {
                    cell.destroy();
                }
            });
        });
    }
}