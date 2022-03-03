import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedFilters } from "../../../redux/filters-options/filtersSelector";

import {
  selectAllMembers,
  selectFilterdMembers,
} from "../../../redux/kneset-members/membersSelctors";
import { resultsFilter } from "../../../utils";
import ResultItem from "../results-item/ResultsItem";

import "./resultsList.scss";

const ResultsList = () => {
  // const filterdResults = useSelector(selectFilterdMembers);
  const filtersList = useSelector(selectSelectedFilters);
  const membersData = useSelector(selectAllMembers);
  const filterdResults = resultsFilter(membersData, filtersList);

  return (
    <div className="results-list">
      {/* <button>מיין לפי</button> */}
      {filterdResults.map((member) => (
        <ResultItem key={member.member_id} member={member} />
      ))}
    </div>
  );
};

export default ResultsList;
