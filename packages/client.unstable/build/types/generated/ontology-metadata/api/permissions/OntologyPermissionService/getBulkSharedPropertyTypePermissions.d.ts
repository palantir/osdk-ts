import { type ConjureContext } from "conjure-lite";
import type { GetBulkSharedPropertyTypePermissionsRequest } from "../GetBulkSharedPropertyTypePermissionsRequest.js";
import type { GetBulkSharedPropertyTypePermissionsResponse } from "../GetBulkSharedPropertyTypePermissionsResponse.js";
/**
* Returns which permissions the user has on the SharedPropertyTypes provided. Limited to at most 500 entries per
* call.
*/
export declare function getBulkSharedPropertyTypePermissions(ctx: ConjureContext, request: GetBulkSharedPropertyTypePermissionsRequest): Promise<GetBulkSharedPropertyTypePermissionsResponse>;
