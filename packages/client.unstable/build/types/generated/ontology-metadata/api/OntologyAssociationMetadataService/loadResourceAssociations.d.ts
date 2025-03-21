import { type ConjureContext } from "conjure-lite";
import type { LoadResourceAssociationsRequest } from "../association/metadata/LoadResourceAssociationsRequest.js";
import type { LoadResourceAssociationsResponse } from "../association/metadata/LoadResourceAssociationsResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
/**
* Endpoint to load the ontology associations linked to the requested resources
*/
export declare function loadResourceAssociations(ctx: ConjureContext, ontologyRid: OntologyRid, request: LoadResourceAssociationsRequest): Promise<LoadResourceAssociationsResponse>;
