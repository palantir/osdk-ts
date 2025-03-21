import { type ConjureContext } from "conjure-lite";
import type { LoadOntologyEntityAssociationsRequest } from "../association/metadata/LoadOntologyEntityAssociationsRequest.js";
import type { LoadOntologyEntityAssociationsResponse } from "../association/metadata/LoadOntologyEntityAssociationsResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
/**
* Endpoint to load the ontology associations linked to the requested ontology entities.
*/
export declare function loadOntologyEntityAssociations(ctx: ConjureContext, ontologyRid: OntologyRid, request: LoadOntologyEntityAssociationsRequest): Promise<LoadOntologyEntityAssociationsResponse>;
