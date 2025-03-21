import type { OntologyIrSecurityGroupGranularSecurityDefinition } from "./OntologyIrSecurityGroupGranularSecurityDefinition.js";
import type { SecurityGroupMandatoryOnlySecurityDefinition } from "./SecurityGroupMandatoryOnlySecurityDefinition.js";
export interface OntologyIrSecurityGroupSecurityDefinition_mandatoryOnly {
	type: "mandatoryOnly";
	mandatoryOnly: SecurityGroupMandatoryOnlySecurityDefinition;
}
export interface OntologyIrSecurityGroupSecurityDefinition_granular {
	type: "granular";
	granular: OntologyIrSecurityGroupGranularSecurityDefinition;
}
export type OntologyIrSecurityGroupSecurityDefinition = OntologyIrSecurityGroupSecurityDefinition_mandatoryOnly | OntologyIrSecurityGroupSecurityDefinition_granular;
