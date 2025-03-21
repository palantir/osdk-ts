import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { GetMetricsRequest } from "../GetMetricsRequest.js";
import type { GetMetricsResponse } from "../GetMetricsResponse.js";
/**
* Get metrics for the specified application up to the last 30 days.
* Will fail if internal-tables is not installed on the stack, or return empty if the usage data has not yet
* been indexed.
*
* Requires third-party-application:view-application on the specified application.
*/
export declare function getMetrics(ctx: ConjureContext, applicationRid: ApplicationRid, request: GetMetricsRequest): Promise<GetMetricsResponse>;
