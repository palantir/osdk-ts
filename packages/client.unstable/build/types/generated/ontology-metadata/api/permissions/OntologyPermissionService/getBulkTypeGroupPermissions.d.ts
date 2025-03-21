import { type ConjureContext } from "conjure-lite";
import type { GetBulkTypeGroupPermissionsRequest } from "../GetBulkTypeGroupPermissionsRequest.js";
import type { GetBulkTypeGroupPermissionsResponse } from "../GetBulkTypeGroupPermissionsResponse.js";
/**
* Returns which permissions the user has on the TypeGroups provided. Limited to at most 500 entries per
* call.
*/
export declare function getBulkTypeGroupPermissions(ctx: ConjureContext, request: GetBulkTypeGroupPermissionsRequest): Promise<GetBulkTypeGroupPermissionsResponse>;
