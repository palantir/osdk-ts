import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* An error representing when the property of an object type is backed by a column and that column is missing from the backing datasource.
*/
export interface ColumnMissingFromBackingDatasourceForObjectTypeError {
	objectType: ObjectTypeRid;
	propertyType: PropertyTypeRid;
}
