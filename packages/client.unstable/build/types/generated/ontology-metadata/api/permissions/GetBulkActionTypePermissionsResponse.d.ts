import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { GetActionTypePermissionsResponse } from "./GetActionTypePermissionsResponse.js";
/**
* The operations the user has on the provided ActionTypes. ActionTypes that do not exist will not be present
* in the response.
*/
export interface GetBulkActionTypePermissionsResponse {
	actionTypePermissions: Record<ActionTypeRid, GetActionTypePermissionsResponse>;
}
