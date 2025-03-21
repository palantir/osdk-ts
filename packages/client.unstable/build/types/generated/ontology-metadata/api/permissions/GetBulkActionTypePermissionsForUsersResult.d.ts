import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { UserId } from "../UserId.js";
import type { GetActionTypePermissionsResponse } from "./GetActionTypePermissionsResponse.js";
/**
* Single user and action type pair permissions were checked for.
*/
export interface GetBulkActionTypePermissionsForUsersResult {
	actionTypeRid: ActionTypeRid;
	userId: UserId;
	permissions: GetActionTypePermissionsResponse;
}
