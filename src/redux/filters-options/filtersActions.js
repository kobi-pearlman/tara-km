import { DUMMY_FILTERS } from "../../dummyFilters";
import { filtersActionTypes } from "./filtersActionTypes";

const fetchFiltersListStarts = () => ({
  type: filtersActionTypes.FETCH_FILTERS_START,
});

const fetchFiltersListSuccess = (filtersList) => ({
  type: filtersActionTypes.FETCH_FILTERS_SUCCESS,
  payload: filtersList,
});

export const getFiltersList = () => {
  return (dispatch) => {
    try {
      dispatch(fetchFiltersListStarts());
      //fetch()
      const filtersList = DUMMY_FILTERS.data;
      dispatch(fetchFiltersListSuccess(filtersList));
    } catch (error) {}
  };
};

export const addSelectedFilter = (filter) => ({
  type: filtersActionTypes.ADD_FILTER,
  payload: filter,
});

export const removeSelectedFilter = (filterType) => ({
  type: filtersActionTypes.REMOVE_FILTER,
  payload: filterType,
});
