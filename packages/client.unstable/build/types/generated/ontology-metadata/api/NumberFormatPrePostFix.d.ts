import type { NumberFormatBase } from "./NumberFormatBase.js";
import type { PrePostFix } from "./PrePostFix.js";
/**
* Consider using currency/unit instead of this formatter.
*
* Attach an arbitrary constant pre/post-fix.
*/
export interface NumberFormatPrePostFix {
	base: NumberFormatBase;
	prePostFix: PrePostFix;
}
