import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { GetInterfaceTypePermissionsResponse } from "./GetInterfaceTypePermissionsResponse.js";
/**
* The operations the user has on the provided InterfaceTypeRids. InterfaceTypes that do not exist
* will not be present in the response.
*/
export interface GetBulkInterfaceTypePermissionsResponse {
	interfaceTypePermissions: Record<InterfaceTypeRid, GetInterfaceTypePermissionsResponse>;
}
