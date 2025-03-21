import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { UserId } from "../UserId.js";
/**
* Single user and link type pair to check permissions for
*/
export interface GetBulkLinkTypePermissionsForUsersQuery {
	linkTypeRid: LinkTypeRid;
	userId: UserId;
}
