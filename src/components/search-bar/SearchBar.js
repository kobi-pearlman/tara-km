import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAllMembers } from "../../redux/kneset-members/membersSelctors";

import "./searchBar.scss";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [filterdMembers, setFilterdMembers] = useState([]);
  const membersList = useSelector(selectAllMembers);

  const filterdMembershandler = () => {
    const filterdList = membersList.filter((member) => {
      return (
        member.first_name.includes(inputValue) ||
        member.last_name.includes(inputValue)
      );
    });
    setFilterdMembers(filterdList);
  };

  useEffect(() => {
    filterdMembershandler();
  }, [inputValue]);

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className="search-input"
          type="text"
          placeholder="חיפוש בעיה,מפלגה, חבר כנסת"
        />
        <button className="search-btn">🔍</button>
      </div>
      <div className={`suggestions ${inputValue.length ? "active" : null}`}>
        {inputValue.length
          ? filterdMembers.map((member) => (
              <li>{`${member.first_name} ${member.last_name}`}</li>
            ))
          : null}
      </div>
    </div>
  );
};

export default SearchBar;
