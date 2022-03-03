import { filtersActionTypes } from "./filtersActionTypes";

const intialState = {
  isLoading: false,
  isReady: false,
  isError: false,
  filtersList: [],
  selectedFilters: {},
};

const filtersReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case filtersActionTypes.FETCH_FILTERS_START:
      return { ...state, isLoading: true };
    case filtersActionTypes.FETCH_FILTERS_SUCCESS:
      return {
        ...state,
        filtersList: payload,
        isLoading: false,
        isReady: true,
      };
    case filtersActionTypes.FETCH_FILTERS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case filtersActionTypes.ADD_FILTER:
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          [payload.filterType]: payload,
        },
      };
    case filtersActionTypes.REMOVE_FILTER:
      const clonedState = { ...state };
      delete clonedState.selectedFilters[payload];
      return clonedState;
    default:
      return state;
  }
};

export default filtersReducer;
