import {RenderPosition, render} from "./utils";
import PageController from "./controllers/PageController";
import Page from "./components/page";
import UserStatus from "./components/user-status";

export const moviesContainer = document.querySelector(`.films-list__container-wrapper`);
const main = document.querySelector(`.main`);
export const detailContainer = document.querySelector(`body`);
const header = document.querySelector(`.header`);
const userStatusComponent = new UserStatus();
const pageComponent = new Page();
const pageController = new PageController(pageComponent.getElement());

render(main, pageComponent.getElement(), RenderPosition.BEFOREEND);
pageController.render();

render(header, userStatusComponent.getElement(), RenderPosition.BEFOREEND);

export const detailClose = document.querySelector(`.film-details__close-btn`);
