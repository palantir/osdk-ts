import { type ConjureContext } from "conjure-lite";
import type { OntologyModifyRequest } from "../OntologyModifyRequest.js";
import type { OntologyModifyResponse } from "../OntologyModifyResponse.js";
/**
* Endpoint to modify Ontology entities.
*/
export declare function modifyOntology(ctx: ConjureContext, request: OntologyModifyRequest): Promise<OntologyModifyResponse>;
