import { type ConjureContext } from "conjure-lite";
import type { GetObjectTypesRequest } from "../GetObjectTypesRequest.js";
import type { GetObjectTypesResponse } from "../GetObjectTypesResponse.js";
/**
* Deprecated, do not use. Use ObjectSetService instead.
*/
export declare function getObjectTypes(ctx: ConjureContext, request: GetObjectTypesRequest): Promise<GetObjectTypesResponse>;
