import type { SecurityGroupGranularConditionModification } from "./SecurityGroupGranularConditionModification.js";
import type { SecurityGroupMandatoryPolicy } from "./SecurityGroupMandatoryPolicy.js";
export interface SecurityGroupGranularPolicyModification {
	granularPolicyCondition: SecurityGroupGranularConditionModification;
	additionalMandatory: SecurityGroupMandatoryPolicy;
}
