import type { RuleSetRid } from "./RuleSetRid.js";
/**
* The RuleSets were not found.
*/
export interface RuleSetsNotFoundError {
	ruleSetRids: Array<RuleSetRid>;
}
