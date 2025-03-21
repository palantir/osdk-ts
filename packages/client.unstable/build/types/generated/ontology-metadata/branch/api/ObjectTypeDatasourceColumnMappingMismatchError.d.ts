import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* An error representing when an object type datasource has columns that do not map to a property on the
* corresponding object type.
*/
export interface ObjectTypeDatasourceColumnMappingMismatchError {
	objectType: ObjectTypeRid;
	propertyTypesOnObject: Array<PropertyTypeRid>;
	existingPropertyTypesMappedOnDatasources: Array<PropertyTypeRid>;
	nonexistentPropertyTypesMappedOnDatasources: Array<PropertyTypeId>;
}
