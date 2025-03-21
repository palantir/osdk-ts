import type { DecimalTypeRangeConstraint } from "./DecimalTypeRangeConstraint.js";
import type { OneOfDecimalTypeConstraint } from "./OneOfDecimalTypeConstraint.js";
export interface DecimalTypeDataConstraints_range {
	type: "range";
	range: DecimalTypeRangeConstraint;
}
export interface DecimalTypeDataConstraints_oneOf {
	type: "oneOf";
	oneOf: OneOfDecimalTypeConstraint;
}
export type DecimalTypeDataConstraints = DecimalTypeDataConstraints_range | DecimalTypeDataConstraints_oneOf;
