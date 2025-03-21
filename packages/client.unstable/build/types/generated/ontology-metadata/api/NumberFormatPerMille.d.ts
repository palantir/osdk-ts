import type { NumberFormatBase } from "./NumberFormatBase.js";
/**
* Render number as a per mille. Will multiply the number by 1000 before displaying & attach a "‰" suffix. For
* example, `0.015` corresponds to `15‰`.
*/
export interface NumberFormatPerMille {
	base: NumberFormatBase;
}
