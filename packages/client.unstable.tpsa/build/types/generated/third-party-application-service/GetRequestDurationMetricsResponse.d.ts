import type { RequestDurationMetricsByEndpoint } from "./RequestDurationMetricsByEndpoint.js";
/**
* Response to GetRequestDurationMetrics. Contains results bucketed by day, then by endpoint.
*/
export interface GetRequestDurationMetricsResponse {
	requestDurationMetricsByDay: Record<string, RequestDurationMetricsByEndpoint>;
}
