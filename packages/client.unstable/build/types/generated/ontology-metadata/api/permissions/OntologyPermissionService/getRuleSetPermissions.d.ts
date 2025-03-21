import { type ConjureContext } from "conjure-lite";
import type { OntologyBranchRid } from "../../OntologyBranchRid.js";
import type { RuleSetRid } from "../../RuleSetRid.js";
import type { GetRuleSetPermissionsResponse } from "../GetRuleSetPermissionsResponse.js";
/**
* Returns which permissions the user has on the RuleSet.
*/
export declare function getRuleSetPermissions(ctx: ConjureContext, ruleSetRid: RuleSetRid, ontologyBranchRid: OntologyBranchRid | undefined): Promise<GetRuleSetPermissionsResponse>;
