import {generateMenu} from "./mock/menu";
import {generateMoviesList} from "./mock/movies";
import {generateSortList} from "./mock/sort";
import {createShowMore, subscribeToClick} from "./components/showMore";
import {generateFilmDetail, generateComments} from "./mock/detail";
export const renderContent = (contsiner, template, place = `beforeend`) => {
  contsiner.insertAdjacentHTML(place, template);
};

let menuContainer = document.querySelector(`.main-navigation`);
export let moviesContainer = document.querySelector(`.films-list__container`);
let sortContainer = document.querySelector(`.sort`);
let showMoreContainer = document.querySelector(`.films-list`);
let detailContainer = document.querySelector(`body`);

renderContent(menuContainer, generateMenu());
renderContent(moviesContainer, generateMoviesList().list);
renderContent(sortContainer, generateSortList());
renderContent(showMoreContainer, createShowMore());
renderContent(detailContainer, generateFilmDetail());
let commentsContainer = document.querySelector(`.film-details__comments-list`);
renderContent(commentsContainer, generateComments());

subscribeToClick();
let detail = document.querySelector(`.film-details`);
let detailClose = document.querySelector(`.film-details__close-btn`);
detailClose.addEventListener(`click`, ()=>{
  detail.remove();
});
