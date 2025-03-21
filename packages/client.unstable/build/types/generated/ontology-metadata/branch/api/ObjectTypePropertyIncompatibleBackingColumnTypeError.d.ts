import type { FoundryFieldType } from "../../api/FoundryFieldType.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* An error representing when the property of an object type has a type that is incompatible with the type of the backing data.
*/
export interface ObjectTypePropertyIncompatibleBackingColumnTypeError {
	objectType: ObjectTypeRid;
	propertyType: PropertyTypeRid;
	validColumnTypes: Array<FoundryFieldType>;
	providedColumnType: FoundryFieldType;
}
