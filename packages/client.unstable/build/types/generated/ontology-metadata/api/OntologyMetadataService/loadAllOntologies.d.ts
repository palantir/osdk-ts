import { type ConjureContext } from "conjure-lite";
import type { LoadAllOntologiesRequest } from "../LoadAllOntologiesRequest.js";
import type { LoadAllOntologiesResponse } from "../LoadAllOntologiesResponse.js";
/**
* Endpoint to load metadata about the Ontologies a user has access to. The response will contain
* only Ontologies on which the user has `ontology:view-ontology`. Note that the returned
* LoadAllOntologiesResponse may be empty if there is no Ontology yet.
*/
export declare function loadAllOntologies(ctx: ConjureContext, request: LoadAllOntologiesRequest): Promise<LoadAllOntologiesResponse>;
