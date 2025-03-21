import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { UserId } from "../UserId.js";
import type { GetLinkTypePermissionsResponse } from "./GetLinkTypePermissionsResponse.js";
/**
* Single user and link type pair for which permissions were checked for.
*/
export interface GetBulkLinkTypePermissionsForUsersResult {
	linkTypeRid: LinkTypeRid;
	userId: UserId;
	permissions: GetLinkTypePermissionsResponse;
}
