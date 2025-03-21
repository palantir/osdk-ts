import type { EditsOnlyRid } from "../EditsOnlyRid.js";
import type { PropertySecurityGroupsModification } from "../PropertySecurityGroupsModification.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
export interface ObjectTypeEditsOnlyDatasourceModification {
	editsOnlyRid: EditsOnlyRid | undefined;
	properties: Array<PropertyTypeId>;
	propertySecurityGroups: PropertySecurityGroupsModification;
}
