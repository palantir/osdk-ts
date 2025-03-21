import { type ConjureContext } from "conjure-lite";
import type { GetRelationsForObjectTypesRequest } from "../GetRelationsForObjectTypesRequest.js";
import type { GetRelationsForObjectTypesResponse } from "../GetRelationsForObjectTypesResponse.js";
/**
* Endpoint to batch load relations associated to given objectTypeIds. The GetRelationsForObjectTypesResponse
* will only contain relations that are visible to the user. If the user has requested to get relations at
* invalid ontology versions or for objectTypeIds that do not exist in the specified versions, those entries
* will include an empty set of relations.
*/
export declare function getRelationsForObjectTypes(ctx: ConjureContext, request: GetRelationsForObjectTypesRequest): Promise<GetRelationsForObjectTypesResponse>;
