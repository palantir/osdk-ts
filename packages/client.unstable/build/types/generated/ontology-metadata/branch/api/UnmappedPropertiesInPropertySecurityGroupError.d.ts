import type { DatasourceRid } from "../../api/DatasourceRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
/**
* A property specified in a property security group does not have a mapping in the datasource definition.
*/
export interface UnmappedPropertiesInPropertySecurityGroupError {
	objectTypeRid: ObjectTypeRid;
	datasourceRid: DatasourceRid;
	unmappedPropertyTypeIds: Array<PropertyTypeId>;
}
