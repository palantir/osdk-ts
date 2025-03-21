import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* A marking property must be backed by a datasource that uses granular permissions, either with property
* security groups, or using RVs.
*/
export interface MarkingPropertiesMustBeBackedByDatasourceWithGranularPermissionsError {
	objectTypeId: ObjectTypeId | undefined;
	propertyTypeId: PropertyTypeId | undefined;
	objectTypeRid: ObjectTypeRid | undefined;
	propertyTypeRid: PropertyTypeRid | undefined;
}
