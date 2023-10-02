import { AggregationFixedWidthGrouping } from "./AggregationFixedWidthGrouping";
import { AggregationRangesGroupingV2 } from "./AggregationRangesGroupingV2";
import { AggregationExactGrouping } from "./AggregationExactGrouping";
import { AggregationDurationGroupingV2 } from "./AggregationDurationGroupingV2";

export interface AggregationGroupByV2_FixedWidth extends AggregationFixedWidthGrouping {
    type: "fixedWidth";
}

export interface AggregationGroupByV2_Ranges extends AggregationRangesGroupingV2 {
    type: "ranges";
}

export interface AggregationGroupByV2_Exact extends AggregationExactGrouping {
    type: "exact";
}

export interface AggregationGroupByV2_Duration extends AggregationDurationGroupingV2 {
    type: "duration";
}

export type AggregationGroupByV2 = AggregationGroupByV2_FixedWidth | AggregationGroupByV2_Ranges | AggregationGroupByV2_Exact | AggregationGroupByV2_Duration;
