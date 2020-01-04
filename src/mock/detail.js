import {
  createDetail
} from "../components/detail";

import {
  createComments
} from "../components/comments";
const filmTitles = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
];

const filmPosters = [
  `./images/posters/the-dance-of-life.jpg`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/the-man-with-the-golden-arm.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/the-dance-of-life.jpg`
];

const filmDescription = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `usce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`
];

const filmGenres = [
  `Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Mystery`
];

const comments = [{
  author: `Tim Macoveev`,
  text: `Interesting setting and a good cast`,
  date: `2019/12/31 23:59`
}, {
  author: `John Doe`,
  text: `Booooooooooring`,
  date: `2 days ago`
},
{
  author: `John Doe`,
  text: `Very very old. Meh`,
  date: `2 days ago`
}, {
  author: `John Doe`,
  text: `Almost two hours? Seriously?`,
  date: `2 days ago`
}
];


const getRandomInteger = (min, max) => {
  return min + Math.floor((max - min) * Math.random());
};

const getRandomArray = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

const getRating = () => {
  return getRandomInteger(10, 99) / 10.0;
};

const getDuration = () => {
  const fullMinutes = getRandomInteger(10, 180);
  const hours = Math.floor(fullMinutes / 60);
  const minutes = fullMinutes % 60;
  return `${hours ? hours + `h` : ``} ${minutes}m`;
};

let commentCount = getRandomInteger(0, 4);

const createFilmCard = () => {
  return {
    title: getRandomArray(filmTitles),
    rating: getRating(),
    year: getRandomInteger(1930, 1950),
    duration: getDuration(),
    genre: getRandomArray(filmGenres),
    poster: getRandomArray(filmPosters),
    description: getRandomArray(filmDescription),
    comments: commentCount
  };
};
export const generateFilmDetail = () => {
  let filmParams = createFilmCard();
  return createDetail(filmParams);
};

export let currentComments = comments.slice(1, commentCount + 1);

export const generateComments = () => {
  return Object.values(currentComments)
    .map((it) => {
      return createComments(it);
    }).join(``);
};
