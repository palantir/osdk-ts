import { type ConjureContext } from "conjure-lite";
import type { LoadAllSharedPropertyTypesPageRequest } from "../LoadAllSharedPropertyTypesPageRequest.js";
import type { LoadAllSharedPropertyTypesPageResponse } from "../LoadAllSharedPropertyTypesPageResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
/**
* Endpoint to load a paged collection of all SharedPropertyTypes visible to the user from the specified Ontology and
* OntologyVersion. The maximum number of SharedPropertyTypes returned in a page is capped at 100.
*/
export declare function loadAllSharedPropertyTypesFromOntology(ctx: ConjureContext, ontologyRid: OntologyRid, ontologyVersion: OntologyVersion, request: LoadAllSharedPropertyTypesPageRequest): Promise<LoadAllSharedPropertyTypesPageResponse>;
