import React from "react";
import { useSelector } from "react-redux";
import { selectFilterList } from "../../redux/filters-options/filtersSelector";
import FilterItem from "../filter-item/FilterItem";

import "./filtersList.scss";

const FiltersList = () => {
  const filtersList = useSelector(selectFilterList);
  return (
    <div className="filters-list">
      <div className="filters-container">
        {filtersList.map((item, i) => (
          <FilterItem key={i} filterItem={item} />
        ))}
      </div>
    </div>
  );
};

export default FiltersList;
