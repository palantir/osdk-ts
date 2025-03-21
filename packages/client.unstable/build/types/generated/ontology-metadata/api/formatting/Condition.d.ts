import type { AlwaysCondition } from "./AlwaysCondition.js";
import type { AndCondition } from "./AndCondition.js";
import type { DateRangeCondition } from "./DateRangeCondition.js";
import type { ExactBooleanMatchCondition } from "./ExactBooleanMatchCondition.js";
import type { ExactDateMatchCondition } from "./ExactDateMatchCondition.js";
import type { ExactNumericMatchCondition } from "./ExactNumericMatchCondition.js";
import type { IsNullCondition } from "./IsNullCondition.js";
import type { MathCondition } from "./MathCondition.js";
import type { NotCondition } from "./NotCondition.js";
import type { NumericRangeCondition } from "./NumericRangeCondition.js";
import type { OrCondition } from "./OrCondition.js";
import type { RelativeDateRangeCondition } from "./RelativeDateRangeCondition.js";
import type { RelativeTimestampRangeCondition } from "./RelativeTimestampRangeCondition.js";
import type { StringComparisonCondition } from "./StringComparisonCondition.js";
import type { TimestampRangeCondition } from "./TimestampRangeCondition.js";
export interface Condition_always {
	type: "always";
	always: AlwaysCondition;
}
export interface Condition_and {
	type: "and";
	and: AndCondition;
}
export interface Condition_or {
	type: "or";
	or: OrCondition;
}
export interface Condition_not {
	type: "not";
	not: NotCondition;
}
export interface Condition_isNull {
	type: "isNull";
	isNull: IsNullCondition;
}
export interface Condition_stringComparison {
	type: "stringComparison";
	stringComparison: StringComparisonCondition;
}
export interface Condition_exactBooleanMatch {
	type: "exactBooleanMatch";
	exactBooleanMatch: ExactBooleanMatchCondition;
}
export interface Condition_exactNumericMatch {
	type: "exactNumericMatch";
	exactNumericMatch: ExactNumericMatchCondition;
}
export interface Condition_exactDateMatch {
	type: "exactDateMatch";
	exactDateMatch: ExactDateMatchCondition;
}
export interface Condition_numericRange {
	type: "numericRange";
	numericRange: NumericRangeCondition;
}
export interface Condition_dateRange {
	type: "dateRange";
	dateRange: DateRangeCondition;
}
export interface Condition_timestampRange {
	type: "timestampRange";
	timestampRange: TimestampRangeCondition;
}
export interface Condition_relativeDateRange {
	type: "relativeDateRange";
	relativeDateRange: RelativeDateRangeCondition;
}
export interface Condition_relativeTimestampRange {
	type: "relativeTimestampRange";
	relativeTimestampRange: RelativeTimestampRangeCondition;
}
export interface Condition_math {
	type: "math";
	math: MathCondition;
}
export type Condition = Condition_always | Condition_and | Condition_or | Condition_not | Condition_isNull | Condition_stringComparison | Condition_exactBooleanMatch | Condition_exactNumericMatch | Condition_exactDateMatch | Condition_numericRange | Condition_dateRange | Condition_timestampRange | Condition_relativeDateRange | Condition_relativeTimestampRange | Condition_math;
