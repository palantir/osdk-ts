import { type ConjureContext } from "conjure-lite";
import type { LoadAllInterfaceTypesPageRequest } from "../LoadAllInterfaceTypesPageRequest.js";
import type { LoadAllInterfaceTypesPageResponse } from "../LoadAllInterfaceTypesPageResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
/**
* Endpoint to load a paged collection of all interfaces visible to the user from the specified ontology and
* ontology version. The maximum number of interfaces returned in a page is capped at 100.
*/
export declare function loadAllInterfaceTypesFromOntology(ctx: ConjureContext, ontologyRid: OntologyRid, ontologyVersion: OntologyVersion, request: LoadAllInterfaceTypesPageRequest): Promise<LoadAllInterfaceTypesPageResponse>;
