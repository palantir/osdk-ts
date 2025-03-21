import { type ConjureContext } from "conjure-lite";
import type { OntologyDeleteRequest } from "../../modification/OntologyDeleteRequest.js";
import type { OntologyDeleteResponse } from "../../modification/OntologyDeleteResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";
/**
* Endpoint to delete an Ontology. The Ontology must be empty in order
* to delete it. Requires the "ontology:delete-ontology" permission on the OntologyRid.
*/
export declare function deleteOntology(ctx: ConjureContext, ontologyRid: OntologyRid, request: OntologyDeleteRequest): Promise<OntologyDeleteResponse>;
