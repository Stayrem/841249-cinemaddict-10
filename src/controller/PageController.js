import ShowMore from '../components/show-more';
import {
  render,
  RenderPosition
} from '../utils/render.js';
import SiteMenu from "../components/menu";
import Movies from "../components/movies";
import SiteSort from "../components/sort";
import {
  menuItems
} from "../mock/menu";
import {
  movies
} from "../mock/movies";
import {
  sortItems
} from "../mock/sort";
import {
  FILM_MAX_COUNT,
  FILM_START_COUNT
} from "../constants";

const sortByRaiting = (films) => {
  return films.slice().sort((a, b) => a.rating > b.rating ? 1 : -1);
};

const sortByDate = (films) => {
  return films.slice().sort((a, b) => a.year > b.year ? 1 : -1);
};

export default class PageController {
  constructor(container) {
    this._counter = FILM_START_COUNT;
    this._container = container;
    this._movies = movies;
    this._moviesComponent = new Movies(this._movies);
    this._showButtonComponent = new ShowMore();
    this._sortComponent = new SiteSort(sortItems);
    this.showMoreHandler = this.showMoreHandler.bind(this);
    this.sortClickHandler = this.sortClickHandler.bind(this);
    this._menuComponent = new SiteMenu(menuItems);
  }

  showMoreHandler() {
    this._counter += FILM_START_COUNT;
    this._moviesComponent.renderMoviesComponents(this._movies.slice(0, this._counter));

    if (this._counter >= FILM_MAX_COUNT) {
      this._showButtonComponent.unmount();
      this._showButtonComponent.removeElement();
    }
  }

  sortClickHandler(evt) {
    let target = evt.target;
    const sortButtons = document.querySelectorAll(`.sort__button`);
    sortButtons.forEach((button) => button.classList.remove(`sort__button--active`));
    target.classList.add(`sort__button--active`)
    if (target.classList.contains(`sort__button--byrating`)) {
      let sortedByRaitingFilms = sortByRaiting(this._movies);
      this._moviesComponent.renderMoviesComponents(sortedByRaitingFilms.slice(0, this._counter));
    } else if (target.classList.contains(`sort__button--bydate`)) {
      let sortedByDateFilms = sortByDate(this._movies);
      this._moviesComponent.renderMoviesComponents(sortedByDateFilms.slice(0, this._counter));
    } else {
      this._moviesComponent.renderMoviesComponents();
    }
    evt.preventDefault();
  }

  render() {
    render(this._container, this._menuComponent, RenderPosition.AFTERBEGIN);
    render(this._container, this._sortComponent, RenderPosition.BEFOREEND);
    render(this._container, this._moviesComponent, RenderPosition.BEFOREEND);
    this._moviesComponent.renderMoviesComponents();
    render(this._container, this._showButtonComponent, RenderPosition.BEFOREEND);
    this._showButtonComponent.subscribeClickListener(this.showMoreHandler);
    this._sortComponent.subscribeClickListener(this.sortClickHandler);
  }
}
