import { GameInitItem } from '../abstract-classes/_game-init-item';

export class MultiplayerOptions extends GameInitItem {
    constructor(...props) {
        super(...props);
        this.errAlert = this.element.querySelector('.control__form-err-alert');
    }

    validate() {
        const hasDuplicates = arr => {
            return arr.some(item => {
                return arr.indexOf(item) !== arr.lastIndexOf(item);
            });
        }

        const inputNames = [];
        this.inputs.forEach(input => inputNames.push(input.element.value));
        const hasDuplicateName = hasDuplicates(inputNames);

        if (hasDuplicateName) {
            this.errAlert.classList.remove('control__form-err-alert--hide');
        } else {
            this.errAlert.classList.add('control__form-err-alert--hide');
        }
        return !hasDuplicateName;
    }
}