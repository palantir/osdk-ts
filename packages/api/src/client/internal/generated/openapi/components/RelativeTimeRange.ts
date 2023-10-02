import { RelativeTime } from "./RelativeTime";

/**
 * A relative time range for a time series query.
 *
 */
export type RelativeTimeRange = { startTime?: RelativeTime; endTime?: RelativeTime; };
