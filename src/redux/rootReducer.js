import { combineReducers } from "redux";
import filtersReducer from "./filters-options/filtersReducer";
import membersReducer from "./kneset-members/membersReducer";

const rootReducer = combineReducers({
  members: membersReducer,
  filters: filtersReducer,
});

export default rootReducer;
