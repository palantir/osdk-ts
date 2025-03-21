import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { RuleSetRid } from "../RuleSetRid.js";
export interface OntologyPermissionServiceGetRuleSetPermissionsRequestParams {
	request: RuleSetRid;
	branchRid: OntologyBranchRid | undefined;
}
