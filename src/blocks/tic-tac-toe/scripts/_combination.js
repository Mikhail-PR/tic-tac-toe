export class Combination {
    constructor(isSingleplayer) {
        this.cells = [];
        this.winLineCoords;
        if (isSingleplayer) this.rank = 0;
    }
}