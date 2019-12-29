export const createMoviesList = (param) => `<article class="film-card">
<h3 class="film-card__title">${param.title}</h3>
<p class="film-card__rating">${param.raiting}</p>
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
