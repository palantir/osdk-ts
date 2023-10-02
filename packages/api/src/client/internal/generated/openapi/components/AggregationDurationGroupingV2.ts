import { TimeUnit } from "./TimeUnit";

/**
 * Divides objects into groups according to an interval. Note that this grouping applies only on date and timestamp types.
 * When grouping by `YEARS`, `QUARTERS`, `MONTHS`, or `WEEKS`, the `value` must be set to `1`.
 *
 */
export type AggregationDurationGroupingV2 = { field: string; value: number; unit: TimeUnit; };
