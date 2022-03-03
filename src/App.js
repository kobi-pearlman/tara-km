import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainPage from "./pages/MainPage";
import { getFiltersList } from "./redux/filters-options/filtersActions";
import { getInitailMembers } from "./redux/kneset-members/membersActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitailMembers());
    dispatch(getFiltersList());
    const check = async () => {
      const res = await fetch("https://knesset-rest-api.herokuapp.com/members");
      console.log(await res.json());
      const filterRes = await fetch(
        "https://knesset-rest-api.herokuapp.com/filters"
      );
      console.log(await filterRes.json());
    };
    check();
  }, [dispatch]);
  return (
    <div className="App">
      <MainPage />
    </div>
  );
};

export default App;
