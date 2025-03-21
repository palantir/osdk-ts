import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { GetMetricsDelayResponse } from "../GetMetricsDelayResponse.js";
/**
* Gets information about the delays associated with the getMetrics endpoint.
*/
export declare function getMetricsDelay(ctx: ConjureContext, applicationRid: ApplicationRid): Promise<GetMetricsDelayResponse>;
