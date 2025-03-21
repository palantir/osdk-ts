import type { NumberFormatBase } from "./NumberFormatBase.js";
/**
* Scale the numeric value to thousands and append a suffix. For example, 1500 will be displayed as "1.5K".
*/
export interface NumberFormatThousands {
	base: NumberFormatBase;
}
