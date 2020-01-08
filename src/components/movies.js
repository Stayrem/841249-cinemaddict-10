import Movie from "./movie";
import {
  RenderPosition,
  render
} from "../utils";
import AbstractComponent from './abstract-component.js';
import {
  FILM_START_COUNT
} from "../constants";


export default class Movies extends AbstractComponent {
  constructor(list) {
    super();
    this._list = list;
    this._element = null;
  }

  get _initialList() {
    return this._list.slice(0, FILM_START_COUNT);
  }

  clearMovies() {
    this._element.innerHTML = ``;
  }

  getTemplate() {
    return `<div class="films-list__container"></div>`;
  }

  renderMoviesComponents(movies = this._initialList) {
    this.clearMovies();
    Object.values(movies).forEach((item) => {
      const movie = new Movie(item);
      render(this._element, movie.getElement(), RenderPosition.BEFOREEND);
      movie.subscribeClickListener();
    });
  }
}
