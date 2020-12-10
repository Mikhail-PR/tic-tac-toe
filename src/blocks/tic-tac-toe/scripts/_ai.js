export class Ai {
    constructor(ticTacToe, player) {
        this.board = ticTacToe.board;
        this.player = player;

        this.methodsWeightsInit();
    }

    methodsWeightsInit() {
        this.moveCalculationMethods = [
            {
                method: this.getRandomCell.bind(this),
                weight: 10
            },
            {
                method: this.getBlockEnemyComb.bind(this),
                weight: 40,
                useEnemyWinComb: true
            },
            {
                method: this.getCollectSelfComb.bind(this),
                weight: 50,
                useSelfWinComb: true
            },
            {
                method: this.preWinMove.bind(this),
                weight: 0,
                isPreWin: true
            }
        ]
    }

    getRandomMethod(methods) {
        const initialValue = 0;

        const weightSum = methods.reduce((acc, curMethod) => acc + curMethod.weight, initialValue);

        const num = this.generateRandomInteger(1, weightSum);
        let n = 0;

        for (let i = 0; i < methods.length; i++) {
            n += methods[i].weight;

            if (n >= num) {
                return methods[i];
            }
        }
    }

    generateRandomInteger(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }

    methodFind(flag) {
        const foundMethod = this.moveCalculationMethods.find(method => {
            return method[flag] === true;
        });
        return foundMethod;
    }

    calculationMove() {
        const isPreWin = this.preWinCheck(this.player.winCombinations) || this.preWinCheck(this.player.enemyPlayer.winCombinations);
        let preWinMethod;

        if (isPreWin) {
            preWinMethod = this.methodFind('isPreWin');
            preWinMethod.weight = 200;
        }

        const winIsImpossible = this.player.winCombinations.length === 0;

        if (!this.winIsImpossible && winIsImpossible) {
            const winMethod = this.methodFind('useSelfWinComb');
            winMethod.weight = 0;
            this.winIsImpossible = true;
        }

        const winEnemyIsImpossible = this.player.enemyPlayer.winCombinations.length === 0;

        if (!this.winEnemyIsImpossible && winEnemyIsImpossible) {
            const blockMethod = this.methodFind('useEnemyWinComb');
            blockMethod.weight = 0;
            this.winEnemyIsImpossible = true;
        }

        const randomMethod = this.getRandomMethod(this.moveCalculationMethods);
        const cell = randomMethod.method();
        this.player.makeMove(cell);

        if (isPreWin) preWinMethod.weight = 0;
    }

    emptyСellsSearch() {
        const emptyСells = [];

        this.board.rows.forEach(row => {
            row.forEach(cell => {
                if (!cell.figure) {
                    emptyСells.push(cell);
                }
            });
        });

        return emptyСells;
    }

    getMaxRank(winCombinations) {
        let maxRank = 0;

        winCombinations.forEach(combination => {
            let curRank = combination.rank;

            if (curRank > maxRank) {
                maxRank = curRank;
            }
        });

        return maxRank;
    }

    getRandomMaxRankComb(winCombinations) {
        const maxRank = this.getMaxRank(winCombinations);

        const maxRankCombinations = winCombinations.filter(combination => combination.rank === maxRank);

        const randomCellIndex = this.generateRandomInteger(0, maxRankCombinations.length - 1);

        return maxRankCombinations[randomCellIndex];
    }

    getRandomCell() {
        const emptyСells = this.emptyСellsSearch();
        const randomCellIndex = this.generateRandomInteger(0, emptyСells.length - 1);

        return emptyСells[randomCellIndex];
    }

    getBlockEnemyComb() {
        const enemyComb = this.getRandomMaxRankComb(this.player.enemyPlayer.winCombinations);

        return this.getMoveOnCombination(enemyComb);
    }

    getCollectSelfComb() {
        const selfComb = this.getRandomMaxRankComb(this.player.winCombinations);

        return this.getMoveOnCombination(selfComb);
    }

    preWinMove() {
        const isSelfPreWin = this.preWinCheck(this.player.winCombinations);

        if (isSelfPreWin) {
            return this.getCollectSelfComb();
        }

        const isEnemyPreWin = this.preWinCheck(this.player.enemyPlayer.winCombinations);

        if (isEnemyPreWin) {
            return this.getBlockEnemyComb();
        }
    }

    preWinCheck(winCombinations) {
        const maxComb = this.getMaxRank(winCombinations);

        return maxComb === this.board.rows.length - 1;
    }

    getMoveOnCombination(combination) {
        const emptyСells = combination.cells.filter(cell => !cell.figure);
        const randomCellIndex = this.generateRandomInteger(0, emptyСells.length - 1);

        return emptyСells[randomCellIndex];
    }

    reset() {
        this.winIsImpossible = false;
        this.winEnemyIsImpossible = false;
        this.methodsWeightsInit();
    }
}