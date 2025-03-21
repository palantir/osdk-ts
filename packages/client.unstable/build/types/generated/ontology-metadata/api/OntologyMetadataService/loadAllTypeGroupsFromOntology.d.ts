import { type ConjureContext } from "conjure-lite";
import type { LoadAllTypeGroupsPageRequest } from "../LoadAllTypeGroupsPageRequest.js";
import type { LoadAllTypeGroupsPageResponse } from "../LoadAllTypeGroupsPageResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
/**
* Endpoint to load a paged collection of all type groups visible to the user from the specified ontology and
* ontology version. The maximum number of type groups returned in a page is capped at 100.
*/
export declare function loadAllTypeGroupsFromOntology(ctx: ConjureContext, ontologyRid: OntologyRid, ontologyVersion: OntologyVersion, request: LoadAllTypeGroupsPageRequest): Promise<LoadAllTypeGroupsPageResponse>;
