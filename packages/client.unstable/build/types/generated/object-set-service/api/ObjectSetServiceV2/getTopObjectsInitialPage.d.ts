import { type ConjureContext } from "conjure-lite";
import type { Backend } from "../Backend.js";
import type { GetTopObjectsInitialPageRequest } from "../GetTopObjectsInitialPageRequest.js";
import type { GetTopObjectsInitialPageResponse } from "../GetTopObjectsInitialPageResponse.js";
/**
* Returns an initial page of top `FoundryObject`s of an evaluated object set based on specified sort criteria.
*
* For OSv1 objects, the total number of results across all pages is limited to 10_000.
* For OSv2 objects, there are no total result limits.
*
* This endpoint does not provide consistency guarantees. Any state changes to the underlying indices can result
* in duplicate results or skipped results.
*/
export declare function getTopObjectsInitialPage(ctx: ConjureContext, request: GetTopObjectsInitialPageRequest, backend: Backend | undefined): Promise<GetTopObjectsInitialPageResponse>;
