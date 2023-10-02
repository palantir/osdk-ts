import { AggregationRange } from "./AggregationRange";

/** Divides objects into groups according to specified ranges. */
export interface AggregationRangesGrouping {
    field: string;
    ranges: Array<AggregationRange>;
}
