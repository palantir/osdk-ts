import type { NumberFormatNotation } from "./NumberFormatNotation.js";
import type { NumberRoundingMode } from "./NumberRoundingMode.js";
/**
* Configure standard rendering of numbers, informed by the locale. Heavily inspired by browser Intl APIs.
*/
export interface NumberFormatBase {
	useGrouping: boolean | undefined;
	convertNegativeToParenthesis: boolean | undefined;
	minimumIntegerDigits: number | undefined;
	minimumFractionDigits: number | undefined;
	maximumFractionDigits: number | undefined;
	minimumSignificantDigits: number | undefined;
	maximumSignificantDigits: number | undefined;
	notation: NumberFormatNotation | undefined;
	roundingMode: NumberRoundingMode | undefined;
}
