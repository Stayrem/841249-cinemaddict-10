import AbstractComponent from './abstract-component.js';

export const createPage = () => `<div></div>`;

export default class Page extends AbstractComponent {
  getTemplate() {
    return createPage();
  }
}

