import { type ConjureContext } from "conjure-lite";
import type { GetBulkObjectSetRequest } from "../GetBulkObjectSetRequest.js";
import type { GetBulkObjectSetResponse } from "../GetBulkObjectSetResponse.js";
/**
* Returns the definitions of requested object sets.
*/
export declare function getBulkObjectSet(ctx: ConjureContext, request: GetBulkObjectSetRequest): Promise<GetBulkObjectSetResponse>;
