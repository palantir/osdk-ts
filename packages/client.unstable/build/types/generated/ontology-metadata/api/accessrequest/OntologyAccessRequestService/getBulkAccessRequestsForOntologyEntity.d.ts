import { type ConjureContext } from "conjure-lite";
import type { BulkGetAccessRequestForOntologyEntityRequest } from "../BulkGetAccessRequestForOntologyEntityRequest.js";
import type { BulkGetAccessRequestsForOntologyEntityResponse } from "../BulkGetAccessRequestsForOntologyEntityResponse.js";
/**
* Gets the set of access requests that target the specified entities
*/
export declare function getBulkAccessRequestsForOntologyEntity(ctx: ConjureContext, request: BulkGetAccessRequestForOntologyEntityRequest): Promise<BulkGetAccessRequestsForOntologyEntityResponse>;
