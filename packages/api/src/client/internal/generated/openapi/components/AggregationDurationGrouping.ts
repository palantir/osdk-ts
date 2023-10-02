import { Duration } from "./Duration";

/**
 * Divides objects into groups according to an interval. Note that this grouping applies only on date types.
 * The interval uses the ISO 8601 notation. For example, "PT1H2M34S" represents a duration of 3754 seconds.
 *
 */
export type AggregationDurationGrouping = { field: string; duration: Duration; };
