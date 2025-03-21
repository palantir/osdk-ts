import { type ConjureContext } from "conjure-lite";
import type { Backend } from "../Backend.js";
import type { GetTopObjectsInitialPageRequest } from "../GetTopObjectsInitialPageRequest.js";
import type { GetTopObjectsInitialPageResponse } from "../GetTopObjectsInitialPageResponse.js";
/**
* Deprecated. Do not use, use ObjectSetServiceV2 instead.
*/
export declare function getTopObjectsInitialPage(ctx: ConjureContext, request: GetTopObjectsInitialPageRequest, backend: Backend | undefined): Promise<GetTopObjectsInitialPageResponse>;
