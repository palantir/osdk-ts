import { type ConjureContext } from "conjure-lite";
import type { GetObjectTypesForTypeGroupsRequest } from "../GetObjectTypesForTypeGroupsRequest.js";
import type { GetObjectTypesForTypeGroupsResponse } from "../GetObjectTypesForTypeGroupsResponse.js";
/**
* Gets a map of TypeGroupRids to the set of ObjectTypeRids that use the TypeGroup. At most 50 TypeGroupRids
* can be requested.
*/
export declare function getObjectTypesForTypeGroups(ctx: ConjureContext, request: GetObjectTypesForTypeGroupsRequest): Promise<GetObjectTypesForTypeGroupsResponse>;
