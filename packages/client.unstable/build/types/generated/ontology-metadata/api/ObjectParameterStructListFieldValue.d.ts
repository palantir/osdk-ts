import type { ParameterId } from "./ParameterId.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
import type { StructFieldRid } from "./StructFieldRid.js";
/**
* Reference to a struct field of a struct list property.
*/
export interface ObjectParameterStructListFieldValue {
	parameterId: ParameterId;
	propertyTypeId: PropertyTypeId;
	structFieldRid: StructFieldRid;
}
