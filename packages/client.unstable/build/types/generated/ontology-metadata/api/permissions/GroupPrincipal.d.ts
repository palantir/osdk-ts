import type { GroupId } from "../GroupId.js";
/**
* Principal that represents a group of users. Identified by the group id.
*/
export interface GroupPrincipal {
	group: GroupId;
}
