import type { NumberFormatBase } from "./NumberFormatBase.js";
/**
* Display the value as basis points, multiplying by 10,000 and append "bps" suffix. For example, 0.01 will be displayed as "100bps".
*/
export interface NumberFormatBasisPoint {
	base: NumberFormatBase;
}
