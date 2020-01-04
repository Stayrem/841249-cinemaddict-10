import {createElement, render, RenderPosition} from '../utils.js';
import Detail from './detail';
import DetailComments from './comments';
import {currentComments} from '../mock/detail';
import {detailContainer} from '../main';
export const createMovie = (param) => `<article class="film-card">
<h3 class="film-card__title">${param.title}</h3>
<p class="film-card__rating">${param.rating}</p>
<p class="film-card__info">
  <span class="film-card__year">${param.year}</span>
  <span class="film-card__duration">${param.duration}</span>
  <span class="film-card__genre">${param.genre}</span>
</p>
<img src="${param.poster}" alt="" class="film-card__poster">
<p class="film-card__description">${param.description}</p>
<a class="film-card__comments">${param.commentsCount} comments</a>
<form class="film-card__controls">
  <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>
  <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
  <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
</form>
</article>`;

export default class Movie {
  constructor(data) {
    this._data = data;
    this._element = null;
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createMovie(this._data);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());

    }
    return this._element;
  }

  _clickHandler() {
    let siteDetailComponent = new Detail(this._data);
    let detailCommentsComponent = new DetailComments(currentComments);
    render(detailContainer, siteDetailComponent.getElement(), RenderPosition.BEFOREEND);
    const commentsContainer = document.querySelector(`.film-details__comments-list`);
    render(commentsContainer, detailCommentsComponent.getElement(), RenderPosition.BEFOREEND);
    siteDetailComponent.subscribeClickListener();
  }

  subscribeClickListener() {
    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, this._clickHandler);
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, this._clickHandler);
    this.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, this._clickHandler);
  }

  unsubscribeClickListener() {
    this._element.removeEventListener(`click`, this._clickHandler);
  }

  removeElement() {
    this._element = null;
  }

  unmount() {
    this.getElement().remove();
  }
}
