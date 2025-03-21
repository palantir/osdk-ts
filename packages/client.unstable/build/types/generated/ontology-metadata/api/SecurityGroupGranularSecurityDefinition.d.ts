import type { SecurityGroupGranularPolicy } from "./SecurityGroupGranularPolicy.js";
/**
* Ontology-managed granular policy applied to the properties in the group.
*/
export interface SecurityGroupGranularSecurityDefinition {
	viewPolicy: SecurityGroupGranularPolicy;
}
