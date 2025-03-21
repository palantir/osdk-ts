import { type ConjureContext } from "conjure-lite";
import type { LoadObjectsRequest } from "../LoadObjectsRequest.js";
import type { LoadObjectsResponse } from "../LoadObjectsResponse.js";
/**
* Deprecated. Do not use, use ObjectSetServiceV2 instead.
*/
export declare function loadObjects(ctx: ConjureContext, request: LoadObjectsRequest): Promise<LoadObjectsResponse>;
