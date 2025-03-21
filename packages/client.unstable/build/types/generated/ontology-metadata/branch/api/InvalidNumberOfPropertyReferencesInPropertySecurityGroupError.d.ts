import type { DatasourceRid } from "../../api/DatasourceRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
/**
* A property specified in the datasource definition is not mapped to a property security group or is mapped
* to more than one property security group.
*/
export interface InvalidNumberOfPropertyReferencesInPropertySecurityGroupError {
	objectTypeRid: ObjectTypeRid;
	datasourceRid: DatasourceRid;
	invalidNumberOfReferenceCounts: Record<PropertyTypeId, number>;
}
