import type { Empty } from "./Empty.js";
import type { UserAttributes } from "./UserAttributes.js";
export interface UserPropertyValue_userId {
	type: "userId";
	userId: Empty;
}
export interface UserPropertyValue_groupIds {
	type: "groupIds";
	groupIds: Empty;
}
export interface UserPropertyValue_userName {
	type: "userName";
	userName: Empty;
}
export interface UserPropertyValue_groupNames {
	type: "groupNames";
	groupNames: Empty;
}
export interface UserPropertyValue_userAttributes {
	type: "userAttributes";
	userAttributes: UserAttributes;
}
export interface UserPropertyValue_organizationMarkingIds {
	type: "organizationMarkingIds";
	organizationMarkingIds: Empty;
}
export type UserPropertyValue = UserPropertyValue_userId | UserPropertyValue_groupIds | UserPropertyValue_userName | UserPropertyValue_groupNames | UserPropertyValue_userAttributes | UserPropertyValue_organizationMarkingIds;
