import type { FloatTypeRangeConstraint } from "./FloatTypeRangeConstraint.js";
import type { OneOfFloatTypeConstraint } from "./OneOfFloatTypeConstraint.js";
export interface FloatTypeDataConstraints_range {
	type: "range";
	range: FloatTypeRangeConstraint;
}
export interface FloatTypeDataConstraints_oneOf {
	type: "oneOf";
	oneOf: OneOfFloatTypeConstraint;
}
export type FloatTypeDataConstraints = FloatTypeDataConstraints_range | FloatTypeDataConstraints_oneOf;
