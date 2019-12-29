import {
  createMoviesList
} from "../components/movies";
let movies = [{
  poster: `./images/posters/the-dance-of-life.jpg`,
  title: `The Dance of Life`,
  raiting: `8.3`,
  year: `1929`,
  duration: `1h 55m`,
  genre: `Musical`,
  description: `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`,
  commentsCount: `5`
},
{
  poster: `./images/posters/sagebrush-trail.jpg`,
  title: `Sagebrush Trail`,
  raiting: `3.2`,
  year: `1933`,
  duration: `54m`,
  genre: `Western`,
  description: `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…`,
  commentsCount: `89`
}, {
  poster: `./images/posters/the-man-with-the-golden-arm.jpg`,
  title: `The Man with the Golden Arm`,
  raiting: `9.0`,
  year: `1955`,
  duration: `1h 59m`,
  genre: `Drama`,
  description: `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`,
  commentsCount: `18`
}, {
  poster: `./images/posters/santa-claus-conquers-the-martians.jpg`,
  title: `Santa Claus Conquers the Martians`,
  raiting: `2.3`,
  year: `1964`,
  duration: `1h 21m`,
  genre: `Comedy`,
  description: `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
  commentsCount: `465`
},
{
  poster: `./images/posters/the-dance-of-life.jpg`,
  title: `The Dance of Life`,
  raiting: `8.3`,
  year: `1929`,
  duration: `1h 55m`,
  genre: `Musical`,
  description: `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`,
  commentsCount: `5`
},
{
  poster: `./images/posters/sagebrush-trail.jpg`,
  title: `Sagebrush Trail`,
  raiting: `3.2`,
  year: `1933`,
  duration: `54m`,
  genre: `Western`,
  description: `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…`,
  commentsCount: `89`
}, {
  poster: `./images/posters/the-man-with-the-golden-arm.jpg`,
  title: `The Man with the Golden Arm`,
  raiting: `9.0`,
  year: `1955`,
  duration: `1h 59m`,
  genre: `Drama`,
  description: `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`,
  commentsCount: `18`
}, {
  poster: `./images/posters/santa-claus-conquers-the-martians.jpg`,
  title: `Santa Claus Conquers the Martians`,
  raiting: `2.3`,
  year: `1964`,
  duration: `1h 21m`,
  genre: `Comedy`,
  description: `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
  commentsCount: `465`
},
{
  poster: `./images/posters/the-dance-of-life.jpg`,
  title: `The Dance of Life`,
  raiting: `8.3`,
  year: `1929`,
  duration: `1h 55m`,
  genre: `Musical`,
  description: `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`,
  commentsCount: `5`
},
{
  poster: `./images/posters/sagebrush-trail.jpg`,
  title: `Sagebrush Trail`,
  raiting: `3.2`,
  year: `1933`,
  duration: `54m`,
  genre: `Western`,
  description: `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…`,
  commentsCount: `89`
}, {
  poster: `./images/posters/the-man-with-the-golden-arm.jpg`,
  title: `The Man with the Golden Arm`,
  raiting: `9.0`,
  year: `1955`,
  duration: `1h 59m`,
  genre: `Drama`,
  description: `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`,
  commentsCount: `18`
}, {
  poster: `./images/posters/santa-claus-conquers-the-martians.jpg`,
  title: `Santa Claus Conquers the Martians`,
  raiting: `2.3`,
  year: `1964`,
  duration: `1h 21m`,
  genre: `Comedy`,
  description: `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
  commentsCount: `465`
},
{
  poster: `./images/posters/sagebrush-trail.jpg`,
  title: `Sagebrush Trail`,
  raiting: `3.2`,
  year: `1933`,
  duration: `54m`,
  genre: `Western`,
  description: `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…`,
  commentsCount: `89`
}, {
  poster: `./images/posters/the-man-with-the-golden-arm.jpg`,
  title: `The Man with the Golden Arm`,
  raiting: `9.0`,
  year: `1955`,
  duration: `1h 59m`,
  genre: `Drama`,
  description: `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`,
  commentsCount: `18`
}, {
  poster: `./images/posters/santa-claus-conquers-the-martians.jpg`,
  title: `Santa Claus Conquers the Martians`,
  raiting: `2.3`,
  year: `1964`,
  duration: `1h 21m`,
  genre: `Comedy`,
  description: `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
  commentsCount: `465`
}
];

export const generateMoviesList = (from = 0, count = 5) => {
  let list = Object.values([...movies].slice(from, from + count)).map((it) => {
    return createMoviesList(it);
  }).join(``);
  return {list, isVisible: from + count < movies.length};
};
