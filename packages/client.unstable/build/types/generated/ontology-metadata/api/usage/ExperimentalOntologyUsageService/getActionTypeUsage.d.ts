import { type ConjureContext } from "conjure-lite";
import type { GetActionTypeUsageRequest } from "../GetActionTypeUsageRequest.js";
import type { GetActionTypeUsageResponse } from "../GetActionTypeUsageResponse.js";
/**
* Endpoint to load usage settings by day for an action type.
* Will fail if internal-tables has not been installed on the stack, or return empty
* if the data has not yet been indexed.
* Needs 'ontology:view-action-type' on the ActionTypeRid.
*/
export declare function getActionTypeUsage(ctx: ConjureContext, request: GetActionTypeUsageRequest): Promise<GetActionTypeUsageResponse>;
