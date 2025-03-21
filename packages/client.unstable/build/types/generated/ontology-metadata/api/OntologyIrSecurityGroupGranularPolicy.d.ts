import type { OntologyIrSecurityGroupGranularCondition } from "./OntologyIrSecurityGroupGranularCondition.js";
import type { SecurityGroupMandatoryPolicy } from "./SecurityGroupMandatoryPolicy.js";
/**
* Ontology-managed granular security applied to the properties in the group. User must also first satisfy the
* additionalMandatory security markings, if any are specified, to have visibility to the properties within
* this group that are allowed by the granular policy.
*
* The granular policy specified must be authorized by the overall ObjectTypeDatasource's dataSecurity for
* every "row" (object or relation).
*/
export interface OntologyIrSecurityGroupGranularPolicy {
	granularPolicyCondition: OntologyIrSecurityGroupGranularCondition;
	additionalMandatory: SecurityGroupMandatoryPolicy;
}
