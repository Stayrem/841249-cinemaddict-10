import Movie from "./movie";
import {RenderPosition, render, createElement} from "../utils";
export default class Movies {
  constructor(list) {
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
