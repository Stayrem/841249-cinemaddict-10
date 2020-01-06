import {render, RenderPosition} from '../utils.js';
import {FILM_MAX_COUNT, FILM_START_COUNT} from "../constants";
import {movies} from "../mock/movies";
import Movies from "./movies";
import {moviesContainer} from "../main";
import AbstractComponent from './abstract-component.js';


export const createShowMore = () => `<button class="films-list__show-more">Show more</button>`;
let currentMoviesCount = 5;

export default class ShowMore extends AbstractComponent {
  /*
  constructor() {
    this._element = null;
    this._clickHandler = this._clickHandler.bind(this);
  }*/

  getTemplate() {
    return createShowMore(this._element);
  }

  _clickHandler() {
    let moviesToShow = movies.slice(currentMoviesCount, currentMoviesCount += FILM_START_COUNT);
    let siteMovieComponent = new Movies(moviesToShow);
    render(moviesContainer, siteMovieComponent.getElement(), RenderPosition.BEFOREEND);
    siteMovieComponent.renderMoviesComponents();
    if (currentMoviesCount >= FILM_MAX_COUNT) {
      this.unmount();
      this.removeElement();
    }
  }

  subscribeClickListener() {
    this.getElement().addEventListener(`click`, this._clickHandler);

  }

  unsubscribeClickListener() {
    this._element.removeEventListener(`click`, this._clickHandler);
  }
}
