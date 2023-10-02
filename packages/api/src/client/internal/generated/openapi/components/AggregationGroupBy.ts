import { AggregationFixedWidthGrouping } from "./AggregationFixedWidthGrouping";
import { AggregationRangesGrouping } from "./AggregationRangesGrouping";
import { AggregationExactGrouping } from "./AggregationExactGrouping";
import { AggregationDurationGrouping } from "./AggregationDurationGrouping";

export interface AggregationGroupBy_FixedWidth extends AggregationFixedWidthGrouping {
    type: "fixedWidth";
}

export interface AggregationGroupBy_Ranges extends AggregationRangesGrouping {
    type: "ranges";
}

export interface AggregationGroupBy_Exact extends AggregationExactGrouping {
    type: "exact";
}

export interface AggregationGroupBy_Duration extends AggregationDurationGrouping {
    type: "duration";
}

export type AggregationGroupBy = AggregationGroupBy_FixedWidth | AggregationGroupBy_Ranges | AggregationGroupBy_Exact | AggregationGroupBy_Duration;
