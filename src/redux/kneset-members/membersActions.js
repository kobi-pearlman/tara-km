import { convertArrayToMap } from "../../utils";
import { membersActionTypes } from "./membersTypes";

const fetchMembersStarts = () => {
  return {
    type: membersActionTypes.FETCH_MEMBERS_STARTS,
  };
};

const fetchMembersSuccess = (membersCollection) => ({
  type: membersActionTypes.FETCH_MEMBERS_SUCCESS,
  payload: membersCollection,
});

const fetchMembersFailure = () => ({
  type: membersActionTypes.FETCH_MEMBERS_FAILURE,
});

export const getInitailMembers = () => {
  return async (dispatch) => {
    console.log("check");
    dispatch(fetchMembersStarts());
    try {
      const res = await fetch("https://knesset-rest-api.herokuapp.com/members");
      const data = await res.json();
      console.log(data);
      // const normlizedData = convertArrayToMap(data.members, "member_id");
      dispatch(fetchMembersSuccess(data.members));
    } catch (error) {
      console.log(error);
      dispatch(fetchMembersFailure());
    }
  };
};
