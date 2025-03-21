import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
/**
* The primary key of an object type cannot be backed by a derived properties datasource.
*/
export interface PrimaryKeyIsDerivedError {
	objectType: ObjectTypeRid;
	primaryKeyPropertyTypesThatAreDerived: Array<PropertyTypeId>;
}
