import { type ConjureContext } from "conjure-lite";
import type { GetBulkInterfaceTypePermissionsRequest } from "../GetBulkInterfaceTypePermissionsRequest.js";
import type { GetBulkInterfaceTypePermissionsResponse } from "../GetBulkInterfaceTypePermissionsResponse.js";
/**
* Returns which permissions the user has on the InterfaceTypes provided. Limited to at most 500 entries per
* call.
*/
export declare function getBulkInterfaceTypePermissions(ctx: ConjureContext, request: GetBulkInterfaceTypePermissionsRequest): Promise<GetBulkInterfaceTypePermissionsResponse>;
