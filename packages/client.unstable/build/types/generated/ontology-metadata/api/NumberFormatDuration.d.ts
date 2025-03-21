import type { DurationBaseValue } from "./DurationBaseValue.js";
import type { DurationFormatStyle } from "./DurationFormatStyle.js";
import type { DurationPrecision } from "./DurationPrecision.js";
import type { NumberFormatBase } from "./NumberFormatBase.js";
/**
* Formatter applied to numeric properties representing time durations.
*/
export interface NumberFormatDuration {
	base: NumberFormatBase;
	formatStyle: DurationFormatStyle;
	precision: DurationPrecision | undefined;
	baseValue: DurationBaseValue;
}
