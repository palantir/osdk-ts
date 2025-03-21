/**
* Request to GetRequestDurationMetrics. Optionally over a date range specified by startDay and endDay, but
* cannot be further filtered down by other properties.
*/
export interface GetRequestDurationMetricsRequest {
	startDay: string | undefined;
	endDay: string | undefined;
}
