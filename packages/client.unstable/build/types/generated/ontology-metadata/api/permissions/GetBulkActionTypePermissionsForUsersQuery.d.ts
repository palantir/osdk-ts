import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { UserId } from "../UserId.js";
/**
* Single user and action type pair to check permissions for
*/
export interface GetBulkActionTypePermissionsForUsersQuery {
	actionTypeRid: ActionTypeRid;
	userId: UserId;
}
