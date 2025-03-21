import type { TypeGroupRid } from "../TypeGroupRid.js";
import type { GetTypeGroupPermissionsResponse } from "./GetTypeGroupPermissionsResponse.js";
/**
* The operations the user has on the provided TypeGroupRids. TypeGroups that do not exist
* will not be present in the response.
*/
export interface GetBulkTypeGroupPermissionsResponse {
	typeGroupPermissions: Record<TypeGroupRid, GetTypeGroupPermissionsResponse>;
}
