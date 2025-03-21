import { type ConjureContext } from "conjure-lite";
import type { GetReferencedEntitiesRequest } from "../GetReferencedEntitiesRequest.js";
import type { GetReferencedEntitiesResponse } from "../GetReferencedEntitiesResponse.js";
/**
* Returns the entities used within an object set. i.e. object type rids and link type rids
*
* Note that relations belonging to an object set can change over time - this information should be treated as
* dynamic and should not be persisted or treated as immutable.
*/
export declare function getReferencedEntities(ctx: ConjureContext, request: GetReferencedEntitiesRequest): Promise<GetReferencedEntitiesResponse>;
