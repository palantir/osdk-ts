import { type ConjureContext } from "conjure-lite";
import type { GetDependenciesForTaggedDependentRequest } from "../GetDependenciesForTaggedDependentRequest.js";
import type { GetDependenciesForTaggedDependentResponse } from "../GetDependenciesForTaggedDependentResponse.js";
/**
* Endpoint to get the OntologyEntities which the requested tagged dependent depends on.
* Permissions required:
* - `ontology:discover-dependent` on the requested depedent.
*/
export declare function getDependenciesForTaggedDependent(ctx: ConjureContext, request: GetDependenciesForTaggedDependentRequest): Promise<GetDependenciesForTaggedDependentResponse>;
