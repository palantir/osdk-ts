import { AggregationRangeV2 } from "./AggregationRangeV2";

/** Divides objects into groups according to specified ranges. */
export type AggregationRangesGroupingV2 = { field: string; ranges: Array<AggregationRangeV2>; };
