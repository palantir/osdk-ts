import { AbsoluteTimeRange } from "./AbsoluteTimeRange";
import { RelativeTimeRange } from "./RelativeTimeRange";

export interface TimeRange_Absolute extends AbsoluteTimeRange {
    type: "absolute";
}

function isAbsolute(obj: TimeRange): obj is TimeRange_Absolute {
    return (obj.type === "absolute");
}

export interface TimeRange_Relative extends RelativeTimeRange {
    type: "relative";
}

function isRelative(obj: TimeRange): obj is TimeRange_Relative {
    return (obj.type === "relative");
}

export interface TimeRangeVisitor<T> {
    absolute: (obj: AbsoluteTimeRange) => T;
    relative: (obj: RelativeTimeRange) => T;
    unknown: (obj: TimeRange) => T;
}

function visit<T>(obj: TimeRange, visitor: TimeRangeVisitor<T>): T {
    if (isAbsolute(obj)) {
        return visitor.absolute(obj);
    }

    if (isRelative(obj)) {
        return visitor.relative(obj);
    }

    return visitor.unknown(obj);
}

export type TimeRange = TimeRange_Absolute | TimeRange_Relative;

export const TimeRange = {
    isAbsolute: isAbsolute,
    isRelative: isRelative,
    visit: visit,
};
