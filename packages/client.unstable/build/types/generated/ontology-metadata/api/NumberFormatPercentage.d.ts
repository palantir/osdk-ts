import type { NumberFormatBase } from "./NumberFormatBase.js";
/**
* Render number as a percentage. Will multiply the number by 100 before displaying & attach a "%" suffix. For
* example, `0.15` corresponds to `15%`.
*/
export interface NumberFormatPercentage {
	base: NumberFormatBase;
}
