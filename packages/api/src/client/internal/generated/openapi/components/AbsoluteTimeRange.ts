/** ISO 8601 timestamps forming a range for a time series query. Start is inclusive and end is exclusive. */
export interface AbsoluteTimeRange {
    startTime?: string;
    endTime?: string;
}
