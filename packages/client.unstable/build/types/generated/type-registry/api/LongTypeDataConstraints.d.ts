import type { LongTypeRangeConstraint } from "./LongTypeRangeConstraint.js";
import type { OneOfLongTypeConstraint } from "./OneOfLongTypeConstraint.js";
export interface LongTypeDataConstraints_range {
	type: "range";
	range: LongTypeRangeConstraint;
}
export interface LongTypeDataConstraints_oneOf {
	type: "oneOf";
	oneOf: OneOfLongTypeConstraint;
}
export type LongTypeDataConstraints = LongTypeDataConstraints_range | LongTypeDataConstraints_oneOf;
