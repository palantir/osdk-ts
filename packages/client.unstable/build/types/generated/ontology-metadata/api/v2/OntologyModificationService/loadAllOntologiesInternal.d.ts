import { type ConjureContext } from "conjure-lite";
import type { LoadAllOntologiesInternalRequest } from "../../modification/LoadAllOntologiesInternalRequest.js";
import type { LoadAllOntologiesInternalResponse } from "../../modification/LoadAllOntologiesInternalResponse.js";
/**
* Endpoint to load metadata about the Ontologies a user has access to. The response will contain
* only Ontologies on which the user has `ontology:view-ontology`. Note that the returned
* LoadAllOntologiesInternalResponse may be empty if there is no Ontology yet.
*/
export declare function loadAllOntologiesInternal(ctx: ConjureContext, request: LoadAllOntologiesInternalRequest): Promise<LoadAllOntologiesInternalResponse>;
