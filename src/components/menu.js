import AbstractComponent from './abstract-component.js';

export const createMenu = (param) => `<a href="${param.id}" class="main-navigation__item ${param.className}">${param.label}</a>`;

export default class SiteMenu extends AbstractComponent {
  constructor(items) {
    super();
    this._items = items;
    this._element = null;
  }

  getTemplate() {
    return `<nav class="main-navigation" >${this._getItemsTemplate()}</nav>`;
  }

  getTemplate() {
    return `<nav class="main-navigation" >${this._getItemsTemplate()}</nav>`;
  }

  _getItemsTemplate() {
    return Object.values(this._items).map((item) => {
      return createMenu(item);
    }).join(``);
  }
}
