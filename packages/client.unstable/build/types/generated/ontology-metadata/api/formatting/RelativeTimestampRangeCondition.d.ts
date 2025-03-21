import type { ValueReference } from "./ValueReference.js";
export interface RelativeTimestampRangeCondition {
	property: ValueReference;
	sinceRelativeMillis: number | undefined;
	untilRelativeMillis: number | undefined;
}
