import {
  createMenu
} from "../components/menu";

let menuItems = [
  {
    label: `All Movies`,
    id: `#all`,
    className: `main-navigation__item--active`
  },
  {
    label: `Watchlist`,
    id: `#watchlist`
  },
  {
    label: `History`,
    id: `history`
  },
  {
    label: `Favorites`,
    id: `favorites`
  }
];

export const generateMenu = () => {
  return Object.values(menuItems).map((it) => {
    return createMenu(it);
  }).join(``);
};
