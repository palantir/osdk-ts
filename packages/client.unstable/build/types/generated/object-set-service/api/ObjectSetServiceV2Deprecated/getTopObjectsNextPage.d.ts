import { type ConjureContext } from "conjure-lite";
import type { Backend } from "../Backend.js";
import type { GetTopObjectsNextPageRequest } from "../GetTopObjectsNextPageRequest.js";
import type { GetTopObjectsNextPageResponse } from "../GetTopObjectsNextPageResponse.js";
/**
* Deprecated. Do not use, use ObjectSetServiceV2 instead.
*/
export declare function getTopObjectsNextPage(ctx: ConjureContext, request: GetTopObjectsNextPageRequest, backend: Backend | undefined): Promise<GetTopObjectsNextPageResponse>;
