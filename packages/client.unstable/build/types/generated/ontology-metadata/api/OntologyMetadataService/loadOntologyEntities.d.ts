import { type ConjureContext } from "conjure-lite";
import type { OntologyLoadEntitiesRequest } from "../OntologyLoadEntitiesRequest.js";
import type { OntologyLoadEntitiesResponse } from "../OntologyLoadEntitiesResponse.js";
/**
* Endpoint to batch load Ontology entities. The returned OntologyLoadResponse will only contain
* entities that actually exist and are visible to the user. If the user has requested entities at
* invalid ontology versions or entities that do not exist in the specified versions,
* those will not be present in the response. If the user tries to load entities across multiple ontologies, the
* call will fail with an exception.
*/
export declare function loadOntologyEntities(ctx: ConjureContext, request: OntologyLoadEntitiesRequest): Promise<OntologyLoadEntitiesResponse>;
