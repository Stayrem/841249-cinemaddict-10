import {createElement} from '../utils.js';

export const createShowMore = () => `<button class="films-list__show-more">Show more</button>`;

export default class ShowMore {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createShowMore(this._element);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  subscribeClickListener(listener) {
    this.getElement().addEventListener(`click`, listener);

  }

  unsubscribeClickListener() {
    this._element.removeEventListener(`click`, this._clickHandler);
  }

  removeElement() {
    this._element = null;
  }

  unmount() {
    this.getElement().remove();
  }
}
