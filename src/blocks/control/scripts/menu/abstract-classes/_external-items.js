export class ExternalItems {
    constructor(id, hideStyleClass) {
        this.element = document.querySelector(`#${id}`);
        this.hideStyleClass = hideStyleClass;
    }

    show() {
        this.element.classList.remove(this.hideStyleClass);
    }

    hide() {
        this.element.classList.add(this.hideStyleClass);
    }
}