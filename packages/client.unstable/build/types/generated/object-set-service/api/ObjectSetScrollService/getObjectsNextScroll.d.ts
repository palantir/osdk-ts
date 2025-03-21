import { type ConjureContext } from "conjure-lite";
import type { GetObjectsNextScrollRequest } from "../GetObjectsNextScrollRequest.js";
import type { GetObjectsScrollResponse } from "../GetObjectsScrollResponse.js";
/**
* Request for a subsequent scroll of ObjectRid(s).
*/
export declare function getObjectsNextScroll(ctx: ConjureContext, request: GetObjectsNextScrollRequest): Promise<GetObjectsScrollResponse>;
