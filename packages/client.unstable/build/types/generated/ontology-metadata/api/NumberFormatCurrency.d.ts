import type { NumberFormatBase } from "./NumberFormatBase.js";
import type { NumberFormatCurrencyStyle } from "./NumberFormatCurrencyStyle.js";
import type { PropertyTypeReferenceOrStringConstant } from "./PropertyTypeReferenceOrStringConstant.js";
/**
* Note that non-visual features e.g. sorting & histograms, are not guaranteed to be currency-aware. They can
* group the same number together even if they have different currencies.
*/
export interface NumberFormatCurrency {
	base: NumberFormatBase;
	style: NumberFormatCurrencyStyle;
	currencyCode: PropertyTypeReferenceOrStringConstant;
}
