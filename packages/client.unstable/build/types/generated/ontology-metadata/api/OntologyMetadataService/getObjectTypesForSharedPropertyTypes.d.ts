import { type ConjureContext } from "conjure-lite";
import type { GetObjectTypesForSharedPropertyTypesRequest } from "../GetObjectTypesForSharedPropertyTypesRequest.js";
import type { GetObjectTypesForSharedPropertyTypesResponse } from "../GetObjectTypesForSharedPropertyTypesResponse.js";
/**
* Gets a map of SharedPropertyTypeRid to the set of ObjectTypeRids that use the SharedPropertyType. At most 50
* SharedPropertyTypeRids can be requested.
*/
export declare function getObjectTypesForSharedPropertyTypes(ctx: ConjureContext, request: GetObjectTypesForSharedPropertyTypesRequest): Promise<GetObjectTypesForSharedPropertyTypesResponse>;
