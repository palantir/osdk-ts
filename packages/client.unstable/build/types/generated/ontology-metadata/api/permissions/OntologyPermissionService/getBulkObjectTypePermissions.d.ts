import { type ConjureContext } from "conjure-lite";
import type { GetBulkObjectTypePermissionsRequest } from "../GetBulkObjectTypePermissionsRequest.js";
import type { GetBulkObjectTypePermissionsResponse } from "../GetBulkObjectTypePermissionsResponse.js";
/**
* Returns which permissions the user has on the ObjectTypes provided. Limited to at most 500 entries per call.
*/
export declare function getBulkObjectTypePermissions(ctx: ConjureContext, request: GetBulkObjectTypePermissionsRequest): Promise<GetBulkObjectTypePermissionsResponse>;
