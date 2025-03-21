import type { NumberFormatCustomUnit } from "./NumberFormatCustomUnit.js";
import type { NumberFormatUnit } from "./NumberFormatUnit.js";
export interface NumericSeriesValueUnit_standardUnit {
	type: "standardUnit";
	standardUnit: NumberFormatUnit;
}
export interface NumericSeriesValueUnit_customUnit {
	type: "customUnit";
	customUnit: NumberFormatCustomUnit;
}
/**
* The unit to accompany the numeric value of a Time Dependent property. Can be a standardized NumberFormatUnit
* or a user-inputted NumberFormatCustomUnit for Numeric series. Either can be provided by a property or a
* user-inputted constant.
*/
export type NumericSeriesValueUnit = NumericSeriesValueUnit_standardUnit | NumericSeriesValueUnit_customUnit;
