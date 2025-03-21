import { type ConjureContext } from "conjure-lite";
import type { LoadActionTypesFromOntologyRequest } from "../../LoadActionTypesFromOntologyRequest.js";
import type { LoadActionTypesFromOntologyResponse } from "../../LoadActionTypesFromOntologyResponse.js";
/**
* Endpoint to batch load ActionTypes. The returned LoadActionTypeResponse will only contain
* ActionTypes that actually exist and are visible to the user. If the user has requested ActionTypes at
* invalid ontology versions or ActionTypes that do not exist in the specified versions,
* those will not be present in the response.
*
* There are limits on the number of action types that can be loaded in one request. Please refer to
* documentation of LoadActionTypesFromOntologyRequest for the values of these limits.
*/
export declare function loadActionTypesFromOntology(ctx: ConjureContext, request: LoadActionTypesFromOntologyRequest): Promise<LoadActionTypesFromOntologyResponse>;
