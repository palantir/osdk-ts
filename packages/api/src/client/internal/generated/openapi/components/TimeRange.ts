import { AbsoluteTimeRange } from "./AbsoluteTimeRange";
import { RelativeTimeRange } from "./RelativeTimeRange";

export interface TimeRange_Absolute extends AbsoluteTimeRange {
    type: "absolute";
}

export interface TimeRange_Relative extends RelativeTimeRange {
    type: "relative";
}

export type TimeRange = TimeRange_Absolute | TimeRange_Relative;
