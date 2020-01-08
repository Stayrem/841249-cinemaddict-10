import {createElement} from '../utils.js';

export const createSortList = (param) => `<li><a href="#" class="sort__button ${param.className}">${param.label}</a></li>`;

export default class SiteSort {
  constructor(items) {
    this._items = items;
    this._element = null;
  }

  getTemplate() {
    return `<ul class="sort">${this._getItemsTemplate()}</ul>`;
  }

  _getItemsTemplate() {
    return Object.values(this._items).map((item) => {
      return createSortList(item);
    }).join(``);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  subscribeClickListener(listener) {
    this.getElement().querySelector(`.sort__button--bydefault`).addEventListener(`click`, listener);
    this.getElement().querySelector(`.sort__button--bydate`).addEventListener(`click`, listener);
    this.getElement().querySelector(`.sort__button--byrating`).addEventListener(`click`, listener);

  }

  removeElement() {
    this._element = null;
  }

  unmount() {
    this.getElement().remove();
  }
}
