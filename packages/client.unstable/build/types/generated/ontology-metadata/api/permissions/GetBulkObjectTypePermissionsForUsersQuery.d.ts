import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { UserId } from "../UserId.js";
/**
* Single user and object type pair to check permissions for
*/
export interface GetBulkObjectTypePermissionsForUsersQuery {
	objectTypeRid: ObjectTypeRid;
	userId: UserId;
}
