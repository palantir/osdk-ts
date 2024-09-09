/**/
import type { ShortTypeRangeConstraint } from "./ShortTypeRangeConstraint.js";
import type { OneOfShortTypeConstraint } from "./OneOfShortTypeConstraint.js";
export interface ShortTypeDataConstraints_range {
type: "range";
range: ShortTypeRangeConstraint
}

export interface ShortTypeDataConstraints_oneOf {
type: "oneOf";
oneOf: OneOfShortTypeConstraint
}export type ShortTypeDataConstraints = ShortTypeDataConstraints_range | ShortTypeDataConstraints_oneOf