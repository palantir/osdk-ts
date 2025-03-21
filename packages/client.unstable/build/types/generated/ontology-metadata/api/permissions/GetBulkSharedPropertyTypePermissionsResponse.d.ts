import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { GetSharedPropertyTypePermissionsResponse } from "./GetSharedPropertyTypePermissionsResponse.js";
/**
* The operations the user has on the provided SharedPropertyTypeRids. SharedPropertyTypes that do not exist
* will not be present in the response.
*/
export interface GetBulkSharedPropertyTypePermissionsResponse {
	sharedPropertyTypePermissions: Record<SharedPropertyTypeRid, GetSharedPropertyTypePermissionsResponse>;
}
