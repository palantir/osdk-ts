import { type ConjureContext } from "conjure-lite";
import type { CheckBulkOperationPermissionsRequest } from "../CheckBulkOperationPermissionsRequest.js";
import type { CheckBulkOperationPermissionsResponse } from "../CheckBulkOperationPermissionsResponse.js";
/**
* Returns whether the user has permission to perform the operation on the requested versioned object sets.
*/
export declare function checkBulkOperationPermissions(ctx: ConjureContext, request: CheckBulkOperationPermissionsRequest): Promise<CheckBulkOperationPermissionsResponse>;
