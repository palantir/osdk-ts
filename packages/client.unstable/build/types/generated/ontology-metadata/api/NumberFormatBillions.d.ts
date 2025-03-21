import type { NumberFormatBase } from "./NumberFormatBase.js";
/**
* Scale the numeric value to billions and append a suffix. For example, 1500000000 will be displayed as "1.5B".
*/
export interface NumberFormatBillions {
	base: NumberFormatBase;
}
