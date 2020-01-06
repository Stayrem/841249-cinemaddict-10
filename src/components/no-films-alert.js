import AbstractComponent from './abstract-component.js';

export const createNoFilmsAlert = () => `<h2 class="films-list__title">There are no movies in our database</h2>`;

export default class NoFilmsAlert extends AbstractComponent {

  getTemplate() {
    return createNoFilmsAlert();
  }
}
