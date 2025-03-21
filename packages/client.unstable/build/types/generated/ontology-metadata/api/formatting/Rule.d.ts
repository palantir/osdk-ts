import type { Condition } from "./Condition.js";
import type { FormatStyle } from "./FormatStyle.js";
/**
* A formatting rule. Apply the format if the condition evaluates to true.
*/
export interface Rule {
	condition: Condition;
	style: FormatStyle;
}
