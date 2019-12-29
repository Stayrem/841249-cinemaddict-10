import {
  createSortList
} from "../components/sort";

let sortItems = [{
  label: `Sort by default`,
  className: `sort__button--active`
}, {
  label: `Sort by date`
}, {
  label: `Sort by rating`
}];

export const generateSortList = () => {
  return Object.values(sortItems).map((it) => {
    return createSortList(it);
  }).join(``);
};
