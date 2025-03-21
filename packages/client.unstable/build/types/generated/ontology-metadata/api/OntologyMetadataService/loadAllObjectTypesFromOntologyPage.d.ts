import { type ConjureContext } from "conjure-lite";
import type { LoadAllObjectTypesFromOntologyPageRequest } from "../LoadAllObjectTypesFromOntologyPageRequest.js";
import type { LoadAllObjectTypesFromOntologyPageResponse } from "../LoadAllObjectTypesFromOntologyPageResponse.js";
/**
* Endpoint to load a paged collection of all ObjectTypes visible to the user from the specified Ontology and
* OntologyVersion. The maximum number of ObjectTypes returned in a page is capped at 500.
*/
export declare function loadAllObjectTypesFromOntologyPage(ctx: ConjureContext, request: LoadAllObjectTypesFromOntologyPageRequest): Promise<LoadAllObjectTypesFromOntologyPageResponse>;
