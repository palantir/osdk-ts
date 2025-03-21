import type { SecurityGroupGroupIdsUserProperty } from "./SecurityGroupGroupIdsUserProperty.js";
import type { SecurityGroupGroupNamesUserProperty } from "./SecurityGroupGroupNamesUserProperty.js";
import type { SecurityGroupUserAttributesUserProperty } from "./SecurityGroupUserAttributesUserProperty.js";
import type { SecurityGroupUserIdUserProperty } from "./SecurityGroupUserIdUserProperty.js";
import type { SecurityGroupUsernameUserProperty } from "./SecurityGroupUsernameUserProperty.js";
export interface SecurityGroupComparisonUserProperty_userId {
	type: "userId";
	userId: SecurityGroupUserIdUserProperty;
}
export interface SecurityGroupComparisonUserProperty_username {
	type: "username";
	username: SecurityGroupUsernameUserProperty;
}
export interface SecurityGroupComparisonUserProperty_groupIds {
	type: "groupIds";
	groupIds: SecurityGroupGroupIdsUserProperty;
}
export interface SecurityGroupComparisonUserProperty_groupNames {
	type: "groupNames";
	groupNames: SecurityGroupGroupNamesUserProperty;
}
export interface SecurityGroupComparisonUserProperty_userAttributes {
	type: "userAttributes";
	userAttributes: SecurityGroupUserAttributesUserProperty;
}
/**
* A value represented by a property of a user.
*/
export type SecurityGroupComparisonUserProperty = SecurityGroupComparisonUserProperty_userId | SecurityGroupComparisonUserProperty_username | SecurityGroupComparisonUserProperty_groupIds | SecurityGroupComparisonUserProperty_groupNames | SecurityGroupComparisonUserProperty_userAttributes;
