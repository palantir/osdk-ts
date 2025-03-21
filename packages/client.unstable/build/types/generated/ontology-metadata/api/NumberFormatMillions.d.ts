import type { NumberFormatBase } from "./NumberFormatBase.js";
/**
* Scale the numeric value to millions and append a suffix. For example, 1500000 will be displayed as "1.5M".
*/
export interface NumberFormatMillions {
	base: NumberFormatBase;
}
