import {createElement} from "../utils";

export const createNoFilmsAlert = () => `<h2 class="films-list__title">There are no movies in our database</h2>`;

export default class NoFilmsAlert {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoFilmsAlert();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  unmount() {
    this.getElement().remove();
  }
}
