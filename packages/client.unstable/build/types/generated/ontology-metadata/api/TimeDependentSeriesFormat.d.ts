import type { TimeDependentNonNumericSeriesFormat } from "./TimeDependentNonNumericSeriesFormat.js";
import type { TimeDependentNumericOrNonNumericSeriesFormat } from "./TimeDependentNumericOrNonNumericSeriesFormat.js";
import type { TimeDependentNumericOrNonNumericSeriesFormatV2 } from "./TimeDependentNumericOrNonNumericSeriesFormatV2.js";
import type { TimeDependentNumericSeriesFormat } from "./TimeDependentNumericSeriesFormat.js";
export interface TimeDependentSeriesFormat_numeric {
	type: "numeric";
	numeric: TimeDependentNumericSeriesFormat;
}
export interface TimeDependentSeriesFormat_nonNumeric {
	type: "nonNumeric";
	nonNumeric: TimeDependentNonNumericSeriesFormat;
}
export interface TimeDependentSeriesFormat_numericOrNonNumeric {
	type: "numericOrNonNumeric";
	numericOrNonNumeric: TimeDependentNumericOrNonNumericSeriesFormat;
}
export interface TimeDependentSeriesFormat_numericOrNonNumericV2 {
	type: "numericOrNonNumericV2";
	numericOrNonNumericV2: TimeDependentNumericOrNonNumericSeriesFormatV2;
}
export type TimeDependentSeriesFormat = TimeDependentSeriesFormat_numeric | TimeDependentSeriesFormat_nonNumeric | TimeDependentSeriesFormat_numericOrNonNumeric | TimeDependentSeriesFormat_numericOrNonNumericV2;
