import { type ConjureContext } from "conjure-lite";
import type { GetDeprecationUsageRequest } from "../GetDeprecationUsageRequest.js";
import type { GetDeprecationUsageResponse } from "../GetDeprecationUsageResponse.js";
/**
* Endpoint to get the daily deprecation usage of an ontology entity over the last 30 days.
*
* Might return empty results if internal-tables is not installed on the stack, or if the usage data has not yet
* been indexed.
*
* Permissions required:
* - `ontology:view-object-type` on the ObjectTypeRid or
* - `ontology:view-relation` on the LinkTypeRid
*/
export declare function getDeprecationUsage(ctx: ConjureContext, request: GetDeprecationUsageRequest): Promise<GetDeprecationUsageResponse>;
