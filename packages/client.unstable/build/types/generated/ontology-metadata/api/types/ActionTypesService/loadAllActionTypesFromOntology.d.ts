import { type ConjureContext } from "conjure-lite";
import type { ActionTypeLoadResponse } from "../../ActionTypeLoadResponse.js";
import type { LoadAllActionTypesFromOntologyRequest } from "../../LoadAllActionTypesFromOntologyRequest.js";
import type { OntologyRid } from "../../OntologyRid.js";
/**
* Endpoint to batch load ActionTypes from the given Ontology. The returned ActionTypeLoadResponse will only
* contain ActionTypes that are visible to the user. Requires `ontology:view-ontology` on the provided OntologyRid.
*/
export declare function loadAllActionTypesFromOntology(ctx: ConjureContext, ontologyRid: OntologyRid, request: LoadAllActionTypesFromOntologyRequest): Promise<ActionTypeLoadResponse>;
