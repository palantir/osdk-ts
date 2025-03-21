import type { PropertyTypeId } from "./PropertyTypeId.js";
import type { SecurityGroupSecurityDefinitionModification } from "./SecurityGroupSecurityDefinitionModification.js";
/**
* Modification of PropertySecurityGroup. A globally unique identifier will be generated for each unique
* SecurityGroupSecurityDefinitionModification specification.
*
* When modifying an existing PropertySecurityGroup, the existing PropertySecurityGroupRid is preserved if the
* actual security remains unchanged from the existing security definition.
*
* The caller issuing a security group modification request must have ontology:edit-property-security-group
* permission, and to satisfy current and proposed (if being changed) mandatory security.
*/
export interface PropertySecurityGroupModification {
	properties: Array<PropertyTypeId>;
	security: SecurityGroupSecurityDefinitionModification;
}
