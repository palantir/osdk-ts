import { type ConjureContext } from "conjure-lite";
import type { GetObjectLocatorsNextScrollRequest } from "../GetObjectLocatorsNextScrollRequest.js";
import type { GetObjectLocatorsScrollResponse } from "../GetObjectLocatorsScrollResponse.js";
/**
* Request for a subsequent scroll of ObjectLocator(s).
*/
export declare function getObjectLocatorsNextScroll(ctx: ConjureContext, request: GetObjectLocatorsNextScrollRequest): Promise<GetObjectLocatorsScrollResponse>;
