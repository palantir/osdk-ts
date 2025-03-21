import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { GetLinkTypePermissionsResponse } from "./GetLinkTypePermissionsResponse.js";
/**
* The operations the user has on the provided LinkTypes. LinkTypes that do not exist will not be present
* in the response.
*/
export interface GetBulkLinkTypePermissionsResponse {
	linkTypePermissions: Record<LinkTypeRid, GetLinkTypePermissionsResponse>;
}
