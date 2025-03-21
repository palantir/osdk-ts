import type { LogicRuleValue } from "./LogicRuleValue.js";
/**
* A URL target for a Foundry rid with query params.
*/
export interface RidUrlTarget {
	rid: LogicRuleValue;
	queryParams: Record<string, LogicRuleValue>;
}
