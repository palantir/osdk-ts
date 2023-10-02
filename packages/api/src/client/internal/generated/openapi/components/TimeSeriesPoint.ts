/**
 * A time and value pair.
 *
 */
export interface TimeSeriesPoint {
    /** An ISO 8601 timestamp */
    time: string;
    /** An object which is either an enum String or a double number. */
    value: any;
}
