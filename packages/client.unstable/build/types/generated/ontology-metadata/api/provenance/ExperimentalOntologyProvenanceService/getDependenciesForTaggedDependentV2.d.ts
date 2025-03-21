import { type ConjureContext } from "conjure-lite";
import type { GetDependenciesForTaggedDependentRequestV2 } from "../GetDependenciesForTaggedDependentRequestV2.js";
import type { GetDependenciesForTaggedDependentResponseV2 } from "../GetDependenciesForTaggedDependentResponseV2.js";
/**
* Endpoint to get the OntologyEntities which the requested tagged dependent depends on. This endpoint supports
* more flexibility in the request than the previous endpoint.
*
* When using this endpoint, it is important to keep the requested entity types the same across page queries.
* Failure to do so can lead to missed entities.
*
* Permissions required:
* - `ontology:discover-dependent` on the requested dependent.
* - view on any entities returned in the response (otherwise they will be filtered out)
*/
export declare function getDependenciesForTaggedDependentV2(ctx: ConjureContext, request: GetDependenciesForTaggedDependentRequestV2): Promise<GetDependenciesForTaggedDependentResponseV2>;
