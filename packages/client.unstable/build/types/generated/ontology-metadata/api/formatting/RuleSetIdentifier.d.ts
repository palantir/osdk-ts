import type { RuleSetRid } from "../RuleSetRid.js";
import type { RuleSetIdInRequest } from "./RuleSetIdInRequest.js";
export interface RuleSetIdentifier_existingRuleSetRid {
	type: "existingRuleSetRid";
	existingRuleSetRid: RuleSetRid;
}
export interface RuleSetIdentifier_ruleSetIdInRequest {
	type: "ruleSetIdInRequest";
	ruleSetIdInRequest: RuleSetIdInRequest;
}
export type RuleSetIdentifier = RuleSetIdentifier_existingRuleSetRid | RuleSetIdentifier_ruleSetIdInRequest;
