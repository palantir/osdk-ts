import { type ConjureContext } from "conjure-lite";
import type { Backend } from "../Backend.js";
import type { GetTopObjectsNextPageRequest } from "../GetTopObjectsNextPageRequest.js";
import type { GetTopObjectsNextPageResponse } from "../GetTopObjectsNextPageResponse.js";
/**
* Returns the next page of top `FoundryObject`s of an evaluated object set based on specified sort criteria.
*
* For OSv1 objects, the total number of results across all pages is limited to 10_000.
* For OSv2 objects, there are no total result limits.
*
* This endpoint does not provide consistency guarantees. Any state changes to the underlying indices can result
* in duplicate results or skipped results.
*/
export declare function getTopObjectsNextPage(ctx: ConjureContext, request: GetTopObjectsNextPageRequest, backend: Backend | undefined): Promise<GetTopObjectsNextPageResponse>;
