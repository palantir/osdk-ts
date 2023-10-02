import { AggregationRangeV2 } from "./AggregationRangeV2";

/** Divides objects into groups according to specified ranges. */
export interface AggregationRangesGroupingV2 {
    field: string;
    ranges: Array<AggregationRangeV2>;
}
