import {
  renderContent,
  moviesContainer
} from '../main';
import {
  generateMoviesList
} from "../mock/movies";

export const createShowMore = () => `<button class="films-list__show-more">Show more</button>`;

export const handleClick = () => {
  let start = 5;
  return () => {
    let moviesData = generateMoviesList(start);
    renderContent(moviesContainer, moviesData.list);
    start += 5;
    console.log(moviesData);
    if (!moviesData.isVisible) {
      document.querySelector(`.films-list__show-more`).style.display = `none`;
    }
  }

}


export const subscribeToClick = () => {
  document.querySelector(`.films-list__show-more`).addEventListener(`click`, handleClick());
}
