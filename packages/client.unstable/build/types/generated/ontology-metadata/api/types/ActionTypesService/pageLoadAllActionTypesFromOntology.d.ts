import { type ConjureContext } from "conjure-lite";
import type { LoadAllActionTypesPageRequest } from "../../LoadAllActionTypesPageRequest.js";
import type { LoadAllActionTypesPageResponse } from "../../LoadAllActionTypesPageResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";
import type { OntologyVersion } from "../../OntologyVersion.js";
/**
* Endpoint to load a paged collection of all ActionTypes visible to the user from the specified Ontology and
* OntologyVersion. The maximum number of ActionTypes returned in a page is capped at 500.
*/
export declare function pageLoadAllActionTypesFromOntology(ctx: ConjureContext, ontologyRid: OntologyRid, ontologyVersion: OntologyVersion, request: LoadAllActionTypesPageRequest): Promise<LoadAllActionTypesPageResponse>;
