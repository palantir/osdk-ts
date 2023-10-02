import { RelativeTime } from "./RelativeTime";

/**
 * A relative time range for a time series query.
 *
 */
export interface RelativeTimeRange {
    startTime?: RelativeTime;
    endTime?: RelativeTime;
}
