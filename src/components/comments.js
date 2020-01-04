import {createElement} from "../utils";

export const createComments = (param) => `<li class="film-details__comment">
<span class="film-details__comment-emoji">
  <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji">
</span>
<div>
  <p class="film-details__comment-text">${param.text}</p>
  <p class="film-details__comment-info">
    <span class="film-details__comment-author">${param.author}</span>
    <span class="film-details__comment-day">${param.date}</span>
    <button class="film-details__comment-delete">Delete</button>
  </p>
</div>
</li>`;

export default class DetailComments {
  constructor(items) {
    this._items = items;
    this._element = null;
  }

  getTemplate() {
    return `<div>${this._getItemsTemplate()}</div>`;
  }

  _getItemsTemplate() {
    return Object.values(this._items).map((item) => {
      return createComments(item);
    }).join(``);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  unmount() {
    this.getElement().remove();
  }
}
