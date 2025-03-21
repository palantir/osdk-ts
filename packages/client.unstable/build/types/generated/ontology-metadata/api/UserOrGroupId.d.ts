import type { GroupId } from "./GroupId.js";
import type { UserId } from "./UserId.js";
export interface UserOrGroupId_userId {
	type: "userId";
	userId: UserId;
}
export interface UserOrGroupId_groupId {
	type: "groupId";
	groupId: GroupId;
}
export type UserOrGroupId = UserOrGroupId_userId | UserOrGroupId_groupId;
