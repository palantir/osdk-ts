import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
import type { OntologyIrSecurityGroupSecurityDefinition } from "./OntologyIrSecurityGroupSecurityDefinition.js";
import type { PropertySecurityGroupRid } from "./PropertySecurityGroupRid.js";
/**
* Defines a grouping of properties sharing the same security.
*
* One and exactly one of the specified groups must contain the primary key property(ies). If there
* are multiple primary key properties, they must belong to the same property group. The security of the
* property group that includes the primary key also specifies overall object visibility: if the user does not
* pass this property group's security, the entire object is invisible, regardless of visibility of other
* property groups.
*/
export interface OntologyIrPropertySecurityGroup {
	rid: PropertySecurityGroupRid;
	properties: Array<ObjectTypeFieldApiName>;
	security: OntologyIrSecurityGroupSecurityDefinition;
}
