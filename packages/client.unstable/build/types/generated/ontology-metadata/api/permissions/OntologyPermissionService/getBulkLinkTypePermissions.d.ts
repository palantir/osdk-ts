import { type ConjureContext } from "conjure-lite";
import type { GetBulkLinkTypePermissionsRequest } from "../GetBulkLinkTypePermissionsRequest.js";
import type { GetBulkLinkTypePermissionsResponse } from "../GetBulkLinkTypePermissionsResponse.js";
/**
* Returns which permissions the user has on the LinkTypes provided. Limited to at most 500 entries per call.
*/
export declare function getBulkLinkTypePermissions(ctx: ConjureContext, request: GetBulkLinkTypePermissionsRequest): Promise<GetBulkLinkTypePermissionsResponse>;
