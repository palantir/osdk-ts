import { type ConjureContext } from "conjure-lite";
import type { Backend } from "../Backend.js";
import type { GetObjectsPageRequest } from "../GetObjectsPageRequest.js";
import type { GetObjectsPageResponse } from "../GetObjectsPageResponse.js";
/**
* Deprecated, do not use. Use ObjectSetService instead.
*/
export declare function getObjectsPage(ctx: ConjureContext, request: GetObjectsPageRequest, backend: Backend | undefined): Promise<GetObjectsPageResponse>;
