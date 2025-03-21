import type { EndpointName } from "./EndpointName.js";
import type { RequestDurationMetrics } from "./RequestDurationMetrics.js";
export type RequestDurationMetricsByEndpoint = Record<EndpointName, RequestDurationMetrics>;
