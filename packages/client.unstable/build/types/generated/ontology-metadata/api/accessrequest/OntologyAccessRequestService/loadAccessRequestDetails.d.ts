import { type ConjureContext } from "conjure-lite";
import type { LoadAccessRequestDetailsRequest } from "../LoadAccessRequestDetailsRequest.js";
import type { LoadAccessRequestDetailsResponse } from "../LoadAccessRequestDetailsResponse.js";
/**
* Returns the access requests of the requested ontology entities.
* If any of the ontology entities don't exist or the user does not have permission to view the access requests,
* we will omit those access requests.
*/
export declare function loadAccessRequestDetails(ctx: ConjureContext, request: LoadAccessRequestDetailsRequest): Promise<LoadAccessRequestDetailsResponse>;
