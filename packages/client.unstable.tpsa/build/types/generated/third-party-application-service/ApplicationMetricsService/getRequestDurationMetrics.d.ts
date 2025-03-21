import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { GetRequestDurationMetricsRequest } from "../GetRequestDurationMetricsRequest.js";
import type { GetRequestDurationMetricsResponse } from "../GetRequestDurationMetricsResponse.js";
/**
* Get request duration metrics (in microseconds) for the specified application over the last
* 30 days.
* Will fail if internal-tables is not installed on the stack, or return empty if the usage data has not yet
* been indexed.
*
* Requires third-party-application:view-application on the specified application.
*/
export declare function getRequestDurationMetrics(ctx: ConjureContext, applicationRid: ApplicationRid, request: GetRequestDurationMetricsRequest): Promise<GetRequestDurationMetricsResponse>;
