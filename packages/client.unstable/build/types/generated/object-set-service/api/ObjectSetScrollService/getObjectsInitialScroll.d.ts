import { type ConjureContext } from "conjure-lite";
import type { GetObjectsInitialScrollRequest } from "../GetObjectsInitialScrollRequest.js";
import type { GetObjectsScrollResponse } from "../GetObjectsScrollResponse.js";
/**
* Request for the first scroll of ObjectRid(s).
*/
export declare function getObjectsInitialScroll(ctx: ConjureContext, request: GetObjectsInitialScrollRequest): Promise<GetObjectsScrollResponse>;
