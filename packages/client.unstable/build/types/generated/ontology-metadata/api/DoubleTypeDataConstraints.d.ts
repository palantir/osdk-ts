import type { DoubleTypeRangeConstraint } from "./DoubleTypeRangeConstraint.js";
import type { OneOfDoubleTypeConstraint } from "./OneOfDoubleTypeConstraint.js";
export interface DoubleTypeDataConstraints_range {
	type: "range";
	range: DoubleTypeRangeConstraint;
}
export interface DoubleTypeDataConstraints_oneOf {
	type: "oneOf";
	oneOf: OneOfDoubleTypeConstraint;
}
export type DoubleTypeDataConstraints = DoubleTypeDataConstraints_range | DoubleTypeDataConstraints_oneOf;
