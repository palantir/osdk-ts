import type { ObjectTypeFieldApiName } from "../../api/ObjectTypeFieldApiName.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
import type { StructFieldRid } from "../../api/StructFieldRid.js";
/**
* An error representing when a struct property type of an object type is not mapped to a struct column field on the backing datasource.
*/
export interface StructColumnFieldMissingFromBackingDatasourceForObjectTypeError {
	objectType: ObjectTypeRid;
	propertyType: PropertyTypeRid;
	structFieldRids: Array<StructFieldRid>;
	structFieldApiNames: Array<ObjectTypeFieldApiName>;
}
