import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { UserId } from "../UserId.js";
import type { GetObjectTypePermissionsResponse } from "./GetObjectTypePermissionsResponse.js";
/**
* Single user and object type pair to check permissions for
*/
export interface GetBulkObjectTypePermissionsForUsersResult {
	objectTypeRid: ObjectTypeRid;
	userId: UserId;
	permissions: GetObjectTypePermissionsResponse;
}
