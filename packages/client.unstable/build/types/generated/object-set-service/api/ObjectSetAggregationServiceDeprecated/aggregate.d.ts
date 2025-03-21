import { type ConjureContext } from "conjure-lite";
import type { AggregateRequest } from "../AggregateRequest.js";
import type { AggregateResponse } from "../AggregateResponse.js";
import type { Backend } from "../Backend.js";
/**
* Deprecated, do not use. Use ObjectSetAggregationService instead.
*/
export declare function aggregate(ctx: ConjureContext, request: AggregateRequest, backend: Backend | undefined): Promise<AggregateResponse>;
