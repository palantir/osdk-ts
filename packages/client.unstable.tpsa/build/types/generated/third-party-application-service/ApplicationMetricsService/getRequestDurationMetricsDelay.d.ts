import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { GetRequestDurationMetricsDelayResponse } from "../GetRequestDurationMetricsDelayResponse.js";
/**
* Gets information about the delays associated with the getRequestDurationMetrics endpoint.
*/
export declare function getRequestDurationMetricsDelay(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<GetRequestDurationMetricsDelayResponse>;
