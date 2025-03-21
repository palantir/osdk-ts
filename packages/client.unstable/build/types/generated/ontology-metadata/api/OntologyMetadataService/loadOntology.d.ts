import { type ConjureContext } from "conjure-lite";
import type { OntologyLoadRequest } from "../OntologyLoadRequest.js";
import type { OntologyLoadResponse } from "../OntologyLoadResponse.js";
/**
* Endpoint to batch load Ontology entities. The returned OntologyLoadResponse will only contain
* entities that actually exist and are visible to the user. If the user has requested entities at
* invalid ontology versions or entities that do not exist in the specified versions,
* those will not be present in the response. If the user tries to load entities across multiple ontologies, the
* call will fail with an exception.
*/
export declare function loadOntology(ctx: ConjureContext, request: OntologyLoadRequest): Promise<OntologyLoadResponse>;
