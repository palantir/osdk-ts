import { type ConjureContext } from "conjure-lite";
import type { Backend } from "../Backend.js";
import type { SuggestRequest } from "../SuggestRequest.js";
import type { SuggestResponse } from "../SuggestResponse.js";
/**
* Deprecated, do not use. Use ObjectSetSuggestService instead.
*/
export declare function suggest(ctx: ConjureContext, request: SuggestRequest, backend: Backend | undefined): Promise<SuggestResponse>;
