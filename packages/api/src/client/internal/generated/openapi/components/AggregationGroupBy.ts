import { AggregationFixedWidthGrouping } from "./AggregationFixedWidthGrouping";
import { AggregationRangesGrouping } from "./AggregationRangesGrouping";
import { AggregationExactGrouping } from "./AggregationExactGrouping";
import { AggregationDurationGrouping } from "./AggregationDurationGrouping";

export interface AggregationGroupBy_FixedWidth extends AggregationFixedWidthGrouping {
    type: "fixedWidth";
}

function isFixedWidth(obj: AggregationGroupBy): obj is AggregationGroupBy_FixedWidth {
    return (obj.type === "fixedWidth");
}

export interface AggregationGroupBy_Ranges extends AggregationRangesGrouping {
    type: "ranges";
}

function isRanges(obj: AggregationGroupBy): obj is AggregationGroupBy_Ranges {
    return (obj.type === "ranges");
}

export interface AggregationGroupBy_Exact extends AggregationExactGrouping {
    type: "exact";
}

function isExact(obj: AggregationGroupBy): obj is AggregationGroupBy_Exact {
    return (obj.type === "exact");
}

export interface AggregationGroupBy_Duration extends AggregationDurationGrouping {
    type: "duration";
}

function isDuration(obj: AggregationGroupBy): obj is AggregationGroupBy_Duration {
    return (obj.type === "duration");
}

export interface AggregationGroupByVisitor<T> {
    fixedWidth: (obj: AggregationFixedWidthGrouping) => T;
    ranges: (obj: AggregationRangesGrouping) => T;
    exact: (obj: AggregationExactGrouping) => T;
    duration: (obj: AggregationDurationGrouping) => T;
    unknown: (obj: AggregationGroupBy) => T;
}

function visit<T>(obj: AggregationGroupBy, visitor: AggregationGroupByVisitor<T>): T {
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

export type AggregationGroupBy = AggregationGroupBy_FixedWidth | AggregationGroupBy_Ranges | AggregationGroupBy_Exact | AggregationGroupBy_Duration;

export const AggregationGroupBy = {
    isFixedWidth: isFixedWidth,
    isRanges: isRanges,
    isExact: isExact,
    isDuration: isDuration,
    visit: visit,
};
