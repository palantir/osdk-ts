import { AggregationRange } from "./AggregationRange";

/** Divides objects into groups according to specified ranges. */
export type AggregationRangesGrouping = { field: string; ranges: Array<AggregationRange>; };
