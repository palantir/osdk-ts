import type { RuleSetRid } from "../RuleSetRid.js";
import type { RuleSet } from "./RuleSet.js";
export interface LoadRuleSetsResponse {
	ruleSets: Record<RuleSetRid, RuleSet>;
}
