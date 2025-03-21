import type { RuleSetRid } from "./RuleSetRid.js";
/**
* There was an attempt to create RuleSets that already exist.
*/
export interface RuleSetsAlreadyExistError {
	ruleSetRids: Array<RuleSetRid>;
}
