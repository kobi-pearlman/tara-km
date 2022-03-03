import React from "react";
import FiltersList from "../components/filters-list/FiltersList";
import ResultsList from "../components/results/results-list/ResultsList";
import SearchBar from "../components/search-bar/SearchBar";
import SelectedFiltersList from "../components/selected-filters/SelectedFiltersList";

import "./mainPage.scss";

const MainPage = () => {
  return (
    <div className="main-page">
      <SearchBar />
      <FiltersList />
      <SelectedFiltersList />
      <ResultsList />
    </div>
  );
};

export default MainPage;
