import { AggregationFixedWidthGrouping } from "./AggregationFixedWidthGrouping";
import { AggregationRangesGroupingV2 } from "./AggregationRangesGroupingV2";
import { AggregationExactGrouping } from "./AggregationExactGrouping";
import { AggregationDurationGroupingV2 } from "./AggregationDurationGroupingV2";

export interface AggregationGroupByV2_FixedWidth extends AggregationFixedWidthGrouping {
    type: "fixedWidth";
}

function isFixedWidth(obj: AggregationGroupByV2): obj is AggregationGroupByV2_FixedWidth {
    return (obj.type === "fixedWidth");
}

export interface AggregationGroupByV2_Ranges extends AggregationRangesGroupingV2 {
    type: "ranges";
}

function isRanges(obj: AggregationGroupByV2): obj is AggregationGroupByV2_Ranges {
    return (obj.type === "ranges");
}

export interface AggregationGroupByV2_Exact extends AggregationExactGrouping {
    type: "exact";
}

function isExact(obj: AggregationGroupByV2): obj is AggregationGroupByV2_Exact {
    return (obj.type === "exact");
}

export interface AggregationGroupByV2_Duration extends AggregationDurationGroupingV2 {
    type: "duration";
}

function isDuration(obj: AggregationGroupByV2): obj is AggregationGroupByV2_Duration {
    return (obj.type === "duration");
}

export interface AggregationGroupByV2Visitor<T> {
    fixedWidth: (obj: AggregationFixedWidthGrouping) => T;
    ranges: (obj: AggregationRangesGroupingV2) => T;
    exact: (obj: AggregationExactGrouping) => T;
    duration: (obj: AggregationDurationGroupingV2) => T;
    unknown: (obj: AggregationGroupByV2) => T;
}

function visit<T>(obj: AggregationGroupByV2, visitor: AggregationGroupByV2Visitor<T>): T {
    if (isFixedWidth(obj)) {
        return visitor.fixedWidth(obj);
    }

    if (isRanges(obj)) {
        return visitor.ranges(obj);
    }

    if (isExact(obj)) {
        return visitor.exact(obj);
    }

    if (isDuration(obj)) {
        return visitor.duration(obj);
    }

    return visitor.unknown(obj);
}

export type AggregationGroupByV2 = AggregationGroupByV2_FixedWidth | AggregationGroupByV2_Ranges | AggregationGroupByV2_Exact | AggregationGroupByV2_Duration;

export const AggregationGroupByV2 = {
    isFixedWidth: isFixedWidth,
    isRanges: isRanges,
    isExact: isExact,
    isDuration: isDuration,
    visit: visit,
};
