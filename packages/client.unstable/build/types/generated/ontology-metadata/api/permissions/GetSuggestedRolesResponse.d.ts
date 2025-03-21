import type { UserId } from "../UserId.js";
/**
* The set of users suggested to have the editor or owner role on the entity.
*/
export interface GetSuggestedRolesResponse {
	editors: Array<UserId>;
	owners: Array<UserId>;
}
