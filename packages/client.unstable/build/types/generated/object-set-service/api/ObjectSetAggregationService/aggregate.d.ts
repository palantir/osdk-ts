import { type ConjureContext } from "conjure-lite";
import type { AggregateRequest } from "../AggregateRequest.js";
import type { AggregateResponse } from "../AggregateResponse.js";
import type { Backend } from "../Backend.js";
/**
* Groups objects in provided Object Set into defined buckets and possibly collects metrics for such buckets. Returns computed metrics.
* WARNING: Please note that for Phonograph2-backed OSS, the results of some aggregations may be approximate under certain conditions. Please refer to the aggregations documentation for more detailed information.
*/
export declare function aggregate(ctx: ConjureContext, request: AggregateRequest, backend: Backend | undefined): Promise<AggregateResponse>;
