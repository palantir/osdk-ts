/**
* The request durations for the approximate 99th, 95th, 75th and 50th percentiles in microseconds.
*/
export interface RequestDurationMetrics {
	p99: number;
	p95: number;
	p75: number;
	p50: number;
}
