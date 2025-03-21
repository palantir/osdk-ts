import { type ConjureContext } from "conjure-lite";
import type { GetObjectLocatorsInitialScrollRequest } from "../GetObjectLocatorsInitialScrollRequest.js";
import type { GetObjectLocatorsScrollResponse } from "../GetObjectLocatorsScrollResponse.js";
/**
* Request for the first scroll of ObjectLocator(s).
*/
export declare function getObjectLocatorsInitialScroll(ctx: ConjureContext, request: GetObjectLocatorsInitialScrollRequest): Promise<GetObjectLocatorsScrollResponse>;
