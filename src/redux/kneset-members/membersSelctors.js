import { createSelector } from "reselect";

const selectMembers = (state) => state.members;

export const selectAllMembers = createSelector([selectMembers], (members) =>
  Object.values(members.membersData)
);

export const selectFilterdMembers = createSelector([selectMembers], (members) =>
  members.filterdMembersId.map((memberId) => members.membersData[memberId])
);
