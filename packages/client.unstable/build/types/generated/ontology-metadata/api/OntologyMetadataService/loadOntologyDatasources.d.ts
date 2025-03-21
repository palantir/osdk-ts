import { type ConjureContext } from "conjure-lite";
import type { OntologyLoadDatasourcesRequest } from "../OntologyLoadDatasourcesRequest.js";
import type { OntologyLoadDatasourcesResponse } from "../OntologyLoadDatasourcesResponse.js";
/**
* Endpoint to load datasources for Ontology entities at a given OntologyVersion or at the latest
* OntologyVersion. The returned OntologyDatasourcesLoadResponse will only contain datasources that are
* visible to the user. If the user has requested to get datasources at invalid ontology versions
* or for objectTypeIds that do not exist in the specified versions, those entries will include an
* empty set of datasources.
*/
export declare function loadOntologyDatasources(ctx: ConjureContext, request: OntologyLoadDatasourcesRequest): Promise<OntologyLoadDatasourcesResponse>;
