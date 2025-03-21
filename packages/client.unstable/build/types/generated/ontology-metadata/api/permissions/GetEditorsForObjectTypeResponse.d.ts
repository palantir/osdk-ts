import type { UserId } from "../UserId.js";
/**
* The list of users who can edit the requested object type.
*/
export interface GetEditorsForObjectTypeResponse {
	userIds: Array<UserId>;
}
