import { Board } from './_board';
import { Player } from './_player';
import { Ai } from './_ai';
import { Score } from './_score';
import { PlayerStats } from './_player-stats';

export class TicTacToe {
    constructor(props) {
        this.gameItem = props.gameItem;
        this.element = document.querySelector('#tic-tac-toe');
        this.gameMode = props.gameMode;
        this.moveCounter = 0;
        this.players = [];
        this.activeStyle = `score__block--active`;
        this.gameOverAlertDelay = 2000;
        this.winLineAnimationTime = 2000;

        const scoreEl = this.element.querySelector(`[name=draw]`);
        this.score = new Score(scoreEl);

        this.init(props);
    }

    init(props) {
        this.board = new Board(this);

        props.playerNames.forEach((playerName, sideNumber) => {
            if (this.gameMode === 'singleplayer') {
                const aiSide = props.playerSide === 'cross' ? 'zero' : 'cross';
                const aiPlayer = new Player(this, 'AI', aiSide, true, [...this.board.winCombinations]);
                const peoplePlayer = new Player(this, playerName, props.playerSide, false, [...this.board.winCombinations]);

                this.players.push(peoplePlayer);
                this.players.push(aiPlayer);
                this.ai = new Ai(this, aiPlayer);
            } else {
                this.players.push(new Player(this, playerName, sideNumber === 0 ? 'cross' : 'zero', false, [...this.board.winCombinations]));
            }
        });

        this.players[0].enemyPlayer = this.players[1];
        this.players[1].enemyPlayer = this.players[0];

        this.curPlayer = this.players[0];
        this.changeMove();
    }

    winLineInit(winCombination) {
        const lineImgHtml = `<svg class="win-img">
        <line class="win-img__line" x1="${winCombination.winLineCoords.x1}%" y1="${winCombination.winLineCoords.y1}%" x2="${winCombination.winLineCoords.x2}%" y2="${winCombination.winLineCoords.y2}%" stroke="black" stroke-width="40" stroke-linecap="round"></line>
        </svg>`;
        this.winLineAreaEl = document.createElement('div');
        this.winLineAreaEl.className = 'tic-tac-toe__win-line-area';
        this.winLineAreaEl.innerHTML = lineImgHtml;
        this.board.element.append(this.winLineAreaEl);

        const winLineImgEl = this.winLineAreaEl.querySelector('.win-img');

        const figureDrawTime = this.curPlayer.figure.drawAnimationTime;
        const enemyFigureDrawTime = this.curPlayer.enemyPlayer.figure.drawAnimationTime;
        const delay = this.curPlayer.isAi ? enemyFigureDrawTime + figureDrawTime : figureDrawTime;

        const delayedWinLineDraw = this.setDelay(this.winLineDraw, delay, this);
        delayedWinLineDraw(winLineImgEl, winCombination.isDiagonal);
    }

    winLineDraw(winLineImgEl, isDiagonal) {
        winLineImgEl.classList.add(`win-img--draw${isDiagonal === true ? '-diagonal' : ''}`);
    }

    setDelay(f, ms, context) {
        return function () {
            setTimeout(() => f.apply(context, arguments), ms);
        };
    }

    changeMove() {
        this.moveCounter++;

        if (this.moveCounter % 2 === 0) {
            this.curPlayer = this.curPlayerSearch('zero');
        } else {
            this.curPlayer = this.curPlayerSearch('cross');
        }

        this.curPlayer.toggleActiveStyle();

        if (this.gameMode === 'singleplayer') {
            if (this.curPlayer.isAi) {
                this.board.listen(false);
                this.ai.calculationMove();
            } else {
                this.board.listen(true);
            }
        }
    }

    curPlayerSearch(side) {
        let foundPlayer;

        this.players.forEach(player => {
            if (player.side === side) {
                foundPlayer = player;
            }
        });

        return foundPlayer;
    }

    gameOver(winCombination) {
        const delay = this.gameOverAlertDelay + this.winLineAnimationTime;

        if (winCombination) {
            this.winLineInit(winCombination);
            this.setDelay(this.winAlertShow, delay, this)(winCombination);
            this.curPlayer.score.addPoint();
            this.saveStats();
        } else {
            this.setDelay(this.drawAlertShow, delay, this)();
            this.curPlayer.toggleActiveStyle();
            this.score.element.classList.toggle(this.activeStyle);
            this.score.addPoint();
            this.saveStats(true);
        }
    }

    winAlertShow() {
        this.gameItem.endGameWindow.setWinnerMessage(`${this.curPlayer.name} is winner by playing on the ${this.curPlayer.side} side!`);
        this.gameItem.close();
    }

    drawAlertShow() {
        this.gameItem.endGameWindow.setWinnerMessage('Draw!');
        this.gameItem.close();
    }

    destroyScoreBoard() {
        this.score.destroy();

        this.players.forEach(player => {
            player.score.destroy();
        });
    }

    destroy(isRestart) {
        this.board.destroy();
        if (this.winLineAreaEl) this.winLineAreaEl.remove();
        this.score.element.classList.remove(this.activeStyle);
        this.players.forEach(player => player.removeActiveStyle());

        if (!isRestart) this.destroyScoreBoard();
    }

    restart() {
        this.destroy(true);
        this.moveCounter = 0;
        this.board.winCombinationsInit();
        if (this.ai) this.ai.reset();
        this.players.forEach(player => player.setWinCombinations([...this.board.winCombinations]));
        this.curPlayer = this.players[0];
        this.changeMove();

        if (this.gameMode === 'multiplayer') this.board.listen(true);
    }

    saveStats(isDraw) {
        let stats = JSON.parse(localStorage.getItem('stats'));

        const playerName1 = this.curPlayer.name;
        const playerName2 = this.curPlayer.enemyPlayer.name;

        if (isDraw) {
            if (stats === null) {
                this.players.forEach(player => {
                    const playerStat = new PlayerStats(player);
                    playerStat.draw++;
                });

            } else {
                this.players.forEach(player => {
                    let playerStat = this.playerStatsSearch(player.name, stats);

                    if (!playerStat) {
                        playerStat = new PlayerStats(player.name);
                        stats[this.gameMode].push(playerStat);
                    }

                    playerStat.draw++;
                });
            }

        } else {
            if (stats === null) {
                stats = this.createStorage();

                const winnerStat = new PlayerStats(playerName1);
                const loserStat = new PlayerStats(playerName2);

                winnerStat.win++;
                loserStat.lose++;

                stats[this.gameMode].push(winnerStat);
                stats[this.gameMode].push(loserStat);

            } else {
                let winnerStat = this.playerStatsSearch(playerName1, stats);
                let loserStat = this.playerStatsSearch(playerName2, stats);

                if (!winnerStat) {
                    winnerStat = new PlayerStats(playerName1);
                    stats[this.gameMode].push(winnerStat);
                }

                if (!loserStat) {
                    loserStat = new PlayerStats(playerName2);
                    stats[this.gameMode].push(loserStat);
                }

                winnerStat.win++;
                loserStat.lose++;
            }
        }

        this.statsSort(stats[this.gameMode]);
        localStorage.setItem('stats', JSON.stringify(stats));
    }

    statsSort(stats) {
        stats.sort((a, b) => b.win - a.win);
    }

    playerStatsSearch(name, stats) {
        let requiredPlayer;

        for (let player in stats[this.gameMode]) {
            const playerName = stats[this.gameMode][player].name;

            if (playerName === name) {
                requiredPlayer = stats[this.gameMode][player];
                break;
            }
        }

        return requiredPlayer;
    }

    createStorage() {
        const stats = {
            singleplayer: [],
            multiplayer: []
        };

        localStorage.setItem('stats', JSON.stringify(stats));

        return stats;
    }
}