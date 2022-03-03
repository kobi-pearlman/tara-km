import { membersActionTypes } from "./membersTypes";

const initalState = {
  membersData: {},
  filterdMembersId: [],
  isLoading: false,
  isError: null,
  isReady: false,
};

const membersReducer = (state = initalState, action) => {
  switch (action.type) {
    case membersActionTypes.FETCH_MEMBERS_STARTS:
      return { ...state, isLoading: true };
    case membersActionTypes.FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        membersData: action.payload,
        isLoading: false,
        isReady: true,
        filterdMembersId: Object.keys(action.payload),
      };
    case membersActionTypes.FETCH_MEMBERS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default membersReducer;
