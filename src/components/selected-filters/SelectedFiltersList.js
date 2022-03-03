import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeSelectedFilter } from "../../redux/filters-options/filtersActions";
import { selectSelectedFilters } from "../../redux/filters-options/filtersSelector";
import SelectedFilterItem from "./SelectedFilterItem";

import "./selectedFiltersList.scss";

const SelectedFiltersList = () => {
  const selectedFilters = useSelector(selectSelectedFilters);
  const dispatch = useDispatch();

  const removeFilter = (filterType) => {
    dispatch(removeSelectedFilter(filterType));
  };

  return (
    <div className="selected-filters-list">
      {selectedFilters.map((filterItem) => (
        <SelectedFilterItem
          clickHandler={removeFilter}
          filterItem={filterItem}
        />
      ))}
    </div>
  );
};

export default SelectedFiltersList;
