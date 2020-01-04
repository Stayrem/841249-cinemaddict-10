import {createElement} from '../utils.js';

export const createMenu = (param) => `<a href="${param.id}" class="main-navigation__item ${param.className}">${param.label}</a>`;

export default class SiteMenu {
  constructor(items) {
    this._items = items;
    this._element = null;
  }

  getTemplate() {
    return `<div>${this._getItemsTemplate()}</div>`;
  }

  _getItemsTemplate() {
    return Object.values(this._items).map((item) => {
      return createMenu(item);
    }).join(``);
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
