import { MenuItem } from './_menu-item';
import { Game } from '../concrete-classes/_game';

export class GameInitItem extends MenuItem {
    constructor(...props) {
        super(...props);
        this.formEl = this.element.querySelector('form');
        this.clearInputValueShim = this.clearInputValue.bind(this);
        this.addInputValueShim = this.addInputValue.bind(this);
        this.saveDefaultInputsValue();
    }

    listen(enable) {
        super.listen(enable);

        if (enable) {
            this.inputs.forEach(input => {
                input.element.addEventListener('focus', this.clearInputValueShim);
                input.element.addEventListener('blur', this.addInputValueShim);
            });
        } else {
            this.inputs.forEach(input => {
                input.element.removeEventListener('focus', this.clearInputValueShim);
                input.element.removeEventListener('blur', this.addInputValueShim);
            });
        }
    }

    switch(btn) {
        if (btn.linkedItem instanceof Game) {
            let isValid = true;
            if (this.validate) isValid = this.validate();

            if (isValid) {
                super.switch(btn);
                this.menu.menuWindow.hide();

                this.gameInit(btn);
            }
        } else {
            super.switch(btn);
        }
    }

    btnSearch(e) {
        if (this.buttons.some(btn => btn.element.contains(e.target))) e.preventDefault();
        super.btnSearch(e);
    }

    gameInit() {
        const gameProps = this.gamePropsInit();
        this.menu.game.play(gameProps);
    }

    gamePropsInit() {
        const props = {};
        props.playerNames = [];
        props.gameMode = this.formEl.getAttribute('name');

        const gameItem = this.menu.items.find(item => item instanceof Game);
        props.gameItem = gameItem;

        this.inputs.forEach(input => {
            if (input.name === 'player-name') {
                props.playerNames.push(input.element.value);
            }
        });

        return props;
    }

    saveDefaultInputsValue() {
        const inputElements = this.element.querySelectorAll('input[type=text]');
        this.inputs = [];

        inputElements.forEach(inputEl => {
            this.inputs.push({
                element: inputEl,
                defaultValue: inputEl.value,
                name: inputEl.getAttribute('name')
            });
        });
    }

    clearInputValue(e) {
        this.inputs.forEach(input => {
            if (input.element === e.target && e.target.value === input.defaultValue) {
                e.target.value = '';
            }
        });
    }

    addInputValue(e) {
        this.inputs.forEach(input => {
            if (input.element === e.target && e.target.value === '') {
                e.target.value = input.defaultValue;
            }
        });
    }
}