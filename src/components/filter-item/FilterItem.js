import React from "react";
import { useDispatch } from "react-redux";
import { addSelectedFilter } from "../../redux/filters-options/filtersActions";

import "./filter-item.scss";

const FilterItem = ({ filterItem }) => {
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    const newFilterToAdd = {
      filterType: filterItem.filter_type,
      filterValue: e.target.value,
    };
    dispatch(addSelectedFilter(newFilterToAdd));
  };
  return (
    <select onChange={(e) => clickHandler(e)} className="filter-item">
      <option selected disabled className="filter-option">
        {filterItem.filter_name}
      </option>
      {filterItem.options.map((option, i) => (
        <option key={i} className="filter-option" value={option.name}>
          {option.name}
        </option>
      ))}
      ▼
    </select>
  );
};

export default FilterItem;
