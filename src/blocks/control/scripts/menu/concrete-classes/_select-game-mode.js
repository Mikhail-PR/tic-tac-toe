import { MenuItem } from '../abstract-classes/_menu-item';

export class SelectGameMode extends MenuItem {
    constructor(...props) {
        super(...props);
        this.listen(true);
    }
}