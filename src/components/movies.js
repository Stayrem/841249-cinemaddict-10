import Movie from "./movie";
import {RenderPosition, render} from "../utils";
import AbstractComponent from './abstract-component.js';

export default class Movies extends AbstractComponent {
  constructor(list) {
    super();
    this._list = list;
    this._element = null;
  }

  getTemplate() {
    return `<div class="films-list__container"></div>`;
  }

  renderMoviesComponents() {
    Object.values(this._list).forEach((item) => {
      const movie = new Movie(item);
      render(this._element, movie.getElement(), RenderPosition.BEFOREEND);
      movie.subscribeClickListener();
    });
  }
}
