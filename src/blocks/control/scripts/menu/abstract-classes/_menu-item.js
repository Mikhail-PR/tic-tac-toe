import { ExternalItems } from './_external-items';

export class MenuItem extends ExternalItems {
    constructor(menu, id) {
        super(id, 'control__block--hide');
        this.menu = menu;
        this.btnSearchShim = this.btnSearch.bind(this);
    }

    buttonsInit() {
        this.buttons = [];
        const btnElements = this.element.querySelectorAll('button');

        const linkedItemSearch = btnId => {
            let targetItem;

            this.menu.itemsPaths.forEach((buttonsId, item) => {
                buttonsId.forEach(id => {
                    if (id === btnId) {
                        targetItem = item;
                    }
                });
            });
            return targetItem;
        }

        btnElements.forEach(btnEl => {
            const linkedItem = linkedItemSearch(btnEl.id);
            this.buttons.push({
                element: btnEl,
                linkedItem: linkedItem
            });
        });
    }

    listen(enable) {
        if (enable) {
            this.element.addEventListener('click', this.btnSearchShim);
        } else {
            this.element.removeEventListener('click', this.btnSearchShim);
        }
    }

    switch(btn) {
        const targetItem = btn.linkedItem;
        this.hide();
        targetItem.show();
    }

    btnSearch(e) {
        this.buttons.forEach(btn => {
            if (btn.element.contains(e.target)) {
                this.switch(btn);
            }
        });
    }

    show() {
        super.show();
        this.listen(true);
    }

    hide() {
        super.hide();
        this.listen(false);
    }
}