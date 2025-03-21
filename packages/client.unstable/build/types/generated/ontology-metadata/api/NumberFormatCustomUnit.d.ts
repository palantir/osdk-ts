import type { NumberFormatBase } from "./NumberFormatBase.js";
import type { PropertyTypeReferenceOrStringConstant } from "./PropertyTypeReferenceOrStringConstant.js";
/**
* For units that aren't accepted by NumberFormatUnit.
* No auto-conversion will ever be attempted.
* This is mostly a label providing instruction on which values can share an axis.
*/
export interface NumberFormatCustomUnit {
	base: NumberFormatBase;
	unit: PropertyTypeReferenceOrStringConstant;
}
