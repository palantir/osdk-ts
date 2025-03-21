import { type ConjureContext } from "conjure-lite";
import type { LoadAllObjectTypesPageRequest } from "../LoadAllObjectTypesPageRequest.js";
import type { LoadAllObjectTypesPageResponse } from "../LoadAllObjectTypesPageResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
/**
* Endpoint to load a paged collection of all ObjectTypes visible to the user from the specified Ontology and
* OntologyVersion. The maximum number of ObjectTypes returned in a page is capped at 500.
*/
export declare function loadAllObjectTypesFromOntology(ctx: ConjureContext, ontologyRid: OntologyRid, ontologyVersion: OntologyVersion, request: LoadAllObjectTypesPageRequest): Promise<LoadAllObjectTypesPageResponse>;
