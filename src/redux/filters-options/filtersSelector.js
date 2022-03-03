import { createSelector } from "reselect";

const filters = (state) => state.filters;

export const selectFilterList = createSelector(
  [filters],
  (filters) => filters.filtersList
);

export const selectSelectedFilters = createSelector([filters], (filters) =>
  Object.values(filters.selectedFilters)
);
