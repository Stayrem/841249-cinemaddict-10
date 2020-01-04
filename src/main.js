import {RenderPosition, render} from "./utils";
import SiteMenu from "./components/menu";
import Movies from "./components/movies";
import ShowMore from "./components/show-more";
import {menuItems} from "./mock/menu";
import {movies} from "./mock/movies";
import {FILM_START_COUNT} from "./constants";
import {generateSortList} from "./mock/sort";
export const renderContent = (contsiner, template, place = `beforeend`) => {
  contsiner.insertAdjacentHTML(place, template);
};
const menuContainer = document.querySelector(`.main-navigation`);
export const moviesContainer = document.querySelector(`.films-list__container-wrapper`);
const sortContainer = document.querySelector(`.sort`);
const showMoreContainer = document.querySelector(`.films-list`);
export const detailContainer = document.querySelector(`body`);

const siteMenuComponent = new SiteMenu(menuItems);
const siteMovieComponent = new Movies(movies.slice(0, FILM_START_COUNT));
const showMoreComponent = new ShowMore();
render(menuContainer, siteMenuComponent.getElement(), RenderPosition.BEFOREEND);

render(moviesContainer, siteMovieComponent.getElement(), RenderPosition.BEFOREEND);
siteMovieComponent.renderMoviesComponents();

render(showMoreContainer, showMoreComponent.getElement(), RenderPosition.BEFOREEND);

renderContent(sortContainer, generateSortList());

export const detailClose = document.querySelector(`.film-details__close-btn`);
