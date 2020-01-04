import {RenderPosition, render} from "./utils";
import SiteMenu from "./components/menu";
import Movies from "./components/movies";
import ShowMore from "./components/show-more";
import UserStatus from "./components/user-status";
import SiteSort from "./components/sort";
import {menuItems} from "./mock/menu";
import {movies} from "./mock/movies";
import {sortItems} from "./mock/sort";
import {FILM_START_COUNT} from "./constants";
export const renderContent = (contsiner, template, place = `beforeend`) => {
  contsiner.insertAdjacentHTML(place, template);
};

export const moviesContainer = document.querySelector(`.films-list__container-wrapper`);
const main = document.querySelector(`.main`);
const showMoreContainer = document.querySelector(`.films-list`);
export const detailContainer = document.querySelector(`body`);
const header = document.querySelector(`.header`);
const siteMenuComponent = new SiteMenu(menuItems);
const siteMovieComponent = new Movies(movies.slice(0, FILM_START_COUNT));
const showMoreComponent = new ShowMore();
const userStatusComponent = new UserStatus();
const siteSortComponent = new SiteSort(sortItems);

render(header, userStatusComponent.getElement(), RenderPosition.BEFOREEND);
render(main, siteSortComponent.getElement(), RenderPosition.AFTERBEGIN);

render(main, siteMenuComponent.getElement(), RenderPosition.AFTERBEGIN);
render(moviesContainer, siteMovieComponent.getElement(), RenderPosition.BEFOREEND);
siteMovieComponent.renderMoviesComponents();

render(showMoreContainer, showMoreComponent.getElement(), RenderPosition.BEFOREEND);

export const detailClose = document.querySelector(`.film-details__close-btn`);
