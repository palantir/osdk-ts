import { type ConjureContext } from "conjure-lite";
import type { OntologyBulkLoadEntitiesRequest } from "../OntologyBulkLoadEntitiesRequest.js";
import type { OntologyBulkLoadEntitiesResponse } from "../OntologyBulkLoadEntitiesResponse.js";
/**
* Endpoint to load Ontology entities in bulk. The returned OntologyBulkLoadEntitiesResponse will only
* contain entities that actually exist and are visible to the user. If the user has requested entities at
* invalid versions or entities that do not exist in the specified versions, those will not be present
* in the response.
*
* There are limits on the number of entities that can be loaded in one request. Please refer to
* documentation of OntologyBulkLoadEntitiesRequest for the values of these limits.
*/
export declare function bulkLoadOntologyEntities(ctx: ConjureContext, onBehalfOf: string | undefined, request: OntologyBulkLoadEntitiesRequest): Promise<OntologyBulkLoadEntitiesResponse>;
