import { type ConjureContext } from "conjure-lite";
import type { GetUsageRequest } from "../GetUsageRequest.js";
import type { GetUsageResponse } from "../GetUsageResponse.js";
/**
* Endpoint to get the daily usage of an ontology entity over the last 30 days.
*
* Might return empty results if internal-tables is not installed on the stack, or if the usage data has not yet
* been indexed.
*
* Permissions required:
* - `ontology:view-object-type` on the ObjectTypeRid or
* - `ontology:view-relation` on the LinkTypeRid
*/
export declare function getUsage(ctx: ConjureContext, request: GetUsageRequest): Promise<GetUsageResponse>;
