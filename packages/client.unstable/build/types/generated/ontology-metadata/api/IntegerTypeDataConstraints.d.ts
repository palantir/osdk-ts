import type { IntegerTypeRangeConstraint } from "./IntegerTypeRangeConstraint.js";
import type { OneOfIntegerTypeConstraint } from "./OneOfIntegerTypeConstraint.js";
export interface IntegerTypeDataConstraints_range {
	type: "range";
	range: IntegerTypeRangeConstraint;
}
export interface IntegerTypeDataConstraints_oneOf {
	type: "oneOf";
	oneOf: OneOfIntegerTypeConstraint;
}
export type IntegerTypeDataConstraints = IntegerTypeDataConstraints_range | IntegerTypeDataConstraints_oneOf;
