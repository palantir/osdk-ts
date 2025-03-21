import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { RuleSetRid } from "../RuleSetRid.js";
export interface LoadRuleSetsRequest {
	ruleSets: Record<RuleSetRid, OntologyVersion | undefined>;
	ruleSetsByBranch: Record<RuleSetRid, OntologyBranchRid | undefined>;
	loadRedacted: boolean | undefined;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
