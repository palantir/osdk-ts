import type { SecurityGroupGranularSecurityDefinition } from "./SecurityGroupGranularSecurityDefinition.js";
import type { SecurityGroupMandatoryOnlySecurityDefinition } from "./SecurityGroupMandatoryOnlySecurityDefinition.js";
export interface SecurityGroupSecurityDefinition_mandatoryOnly {
	type: "mandatoryOnly";
	mandatoryOnly: SecurityGroupMandatoryOnlySecurityDefinition;
}
export interface SecurityGroupSecurityDefinition_granular {
	type: "granular";
	granular: SecurityGroupGranularSecurityDefinition;
}
export type SecurityGroupSecurityDefinition = SecurityGroupSecurityDefinition_mandatoryOnly | SecurityGroupSecurityDefinition_granular;
