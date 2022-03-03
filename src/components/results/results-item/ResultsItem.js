import React from "react";

import "./resultsItem.scss";

const ResultItem = ({ member }) => {
  return (
    <div className="member-card">
      <div className="member-img"></div>
      <div className="member-name">
        {` ${member.first_name} 
        ${member.last_name}`}
      </div>
      <div className="gov-role">{member.gov_role}</div>
      <div className="member-party">{member.party}</div>
    </div>
  );
};

export default ResultItem;
