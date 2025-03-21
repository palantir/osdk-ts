import type { NumberFormatBase } from "./NumberFormatBase.js";
import type { PropertyTypeReferenceOrStringConstant } from "./PropertyTypeReferenceOrStringConstant.js";
/**
* Note that this formatter breaks e.g. sorting features if used in combination with auto-conversion.
*/
export interface NumberFormatUnit {
	base: NumberFormatBase;
	unit: PropertyTypeReferenceOrStringConstant;
}
