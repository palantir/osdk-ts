import { type ConjureContext } from "conjure-lite";
import type { Backend } from "../Backend.js";
import type { SuggestRequest } from "../SuggestRequest.js";
import type { SuggestResponse } from "../SuggestResponse.js";
/**
* Returns suggested values from a property that match a given input, chosen from the set of objects that match a
* given query. The endpoint does not guarantee the ordering of results, and different calls with the same
* request can return different suggested values.
*/
export declare function suggest(ctx: ConjureContext, request: SuggestRequest, backend: Backend | undefined): Promise<SuggestResponse>;
