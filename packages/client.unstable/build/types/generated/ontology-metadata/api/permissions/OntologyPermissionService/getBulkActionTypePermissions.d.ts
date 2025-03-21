import { type ConjureContext } from "conjure-lite";
import type { GetBulkActionTypePermissionsRequest } from "../GetBulkActionTypePermissionsRequest.js";
import type { GetBulkActionTypePermissionsResponse } from "../GetBulkActionTypePermissionsResponse.js";
/**
* Returns which permissions the user has on the ActionTypes provided. Limited to at most 500 entries per call.
*/
export declare function getBulkActionTypePermissions(ctx: ConjureContext, request: GetBulkActionTypePermissionsRequest): Promise<GetBulkActionTypePermissionsResponse>;
