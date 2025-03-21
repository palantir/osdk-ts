import type { SecurityGroupMandatoryPolicy } from "./SecurityGroupMandatoryPolicy.js";
/**
* Ontology-managed mandatory security applied to the properties in the security group.
*/
export interface SecurityGroupMandatoryOnlySecurityDefinition {
	policy: SecurityGroupMandatoryPolicy;
}
