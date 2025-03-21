import { type ConjureContext } from "conjure-lite";
import type { OntologyBulkLoadEntitiesByDatasourcesRequest } from "../OntologyBulkLoadEntitiesByDatasourcesRequest.js";
import type { OntologyBulkLoadEntitiesByDatasourcesResponse } from "../OntologyBulkLoadEntitiesByDatasourcesResponse.js";
/**
* Endpoint to load Ontology entities by their backing datasources in bulk.
* The returned OntologyBulkLoadEntitiesByDatasourcesResponse will only
* contain entities that actually exist and are visible to the user.
* If the user has requested entities that do not exist in any of the latest Ontology versions,
* those will not be present in the response.
*
* There are limits on the number of entities that can be loaded in one request. Please refer to
* documentation of OntologyBulkLoadEntitiesByDatasourcesRequest for the values of these limits.
*/
export declare function bulkLoadOntologyEntitiesByDatasources(ctx: ConjureContext, request: OntologyBulkLoadEntitiesByDatasourcesRequest): Promise<OntologyBulkLoadEntitiesByDatasourcesResponse>;
