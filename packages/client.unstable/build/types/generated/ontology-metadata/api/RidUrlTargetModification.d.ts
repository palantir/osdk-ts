import type { LogicRuleValueModification } from "./LogicRuleValueModification.js";
/**
* A URL target for a Foundry rid with query params.
*/
export interface RidUrlTargetModification {
	rid: LogicRuleValueModification;
	queryParams: Record<string, LogicRuleValueModification>;
}
