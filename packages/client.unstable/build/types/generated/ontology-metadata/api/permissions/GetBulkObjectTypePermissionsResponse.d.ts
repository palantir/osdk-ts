import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { GetObjectTypePermissionsResponse } from "./GetObjectTypePermissionsResponse.js";
/**
* The operations the user has on the provided ObjectTypes. ObjectTypes that do not exist will not be present
* in the response.
*/
export interface GetBulkObjectTypePermissionsResponse {
	objectTypePermissions: Record<ObjectTypeRid, GetObjectTypePermissionsResponse>;
}
