import { GameInitItem } from '../abstract-classes/_game-init-item';

export class SingleplayerOptions extends GameInitItem {
    constructor(...props) {
        super(...props);
    }

    gamePropsInit() {
        const props = super.gamePropsInit();
        const getCheckElValue = name => document.querySelector('input[name="' + name + '"]:checked').value;
        props.playerSide = getCheckElValue('side');

        return props;
    }
}