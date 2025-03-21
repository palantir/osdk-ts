import { type ConjureContext } from "conjure-lite";
import type { GetObjectTypesForInterfaceTypesRequest } from "../GetObjectTypesForInterfaceTypesRequest.js";
import type { GetObjectTypesForInterfaceTypesResponse } from "../GetObjectTypesForInterfaceTypesResponse.js";
/**
* Gets a map of interfaces to the set of object types that implement the interface. At most 50 interfaces can be
* requested.
*/
export declare function getObjectTypesForInterfaceTypes(ctx: ConjureContext, request: GetObjectTypesForInterfaceTypesRequest): Promise<GetObjectTypesForInterfaceTypesResponse>;
