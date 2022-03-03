import React from "react";

import "./selectedFilterItem.scss";

const SelectedFilterItem = ({ filterItem, clickHandler }) => {
  const { filterType, filterValue } = filterItem;

  return (
    <div className="selected-filter-item">
      <span className="remove-btn" onClick={() => clickHandler(filterType)}>
        x
      </span>
      <span className="filter-value">{filterValue}</span>
    </div>
  );
};
export default SelectedFilterItem;
