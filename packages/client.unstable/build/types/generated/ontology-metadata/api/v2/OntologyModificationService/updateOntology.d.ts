import { type ConjureContext } from "conjure-lite";
import type { OntologyUpdateRequest } from "../../modification/OntologyUpdateRequest.js";
import type { OntologyUpdateResponse } from "../../modification/OntologyUpdateResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";
/**
* Endpoint to update information about an existing Ontology. Requires the
* "ontology:update-ontology" permission on the OntologyRid.
*/
export declare function updateOntology(ctx: ConjureContext, ontologyRid: OntologyRid, request: OntologyUpdateRequest): Promise<OntologyUpdateResponse>;
